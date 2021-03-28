import React, { useEffect, useContext } from 'react'
import tron32x from '../../assets/img/tron32x.png'
import x5matrix from '../../assets/img/m1.png'
import spinner from '../../assets/img/spinner.png'
import { useState } from 'react'
import { FaUsers, FaRegUserCircle, FaCircleNotch } from "react-icons/fa";
import { BackofficeContext } from './BackOfficeMain'
import TronWeb from 'tronweb'
import Utils from '../../Utils/Utils'
import TostContainer from '../../Common/ToastContainerCust'
import { toast } from 'react-toastify';
import axios from 'axios'

function copyAffiliateLink() {
    var copyText = document.getElementById("refLink");
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    toast.success("Copied")
}

function BackOfficeSideDashboard(props) {

    const lang = props.lang

    const backofficeContextL = useContext(BackofficeContext)

    const [UserId, setUserId] = useState(0)
    const [partnersCount, setpartnersCount] = useState(0)
    const [tronAccount, setTronAccount] = useState("")
    const [x12balanceTRX, setx12balanceTRX] = useState(0)
    const [tronWeb, settronWeb] = useState({
        installed: false,
        loggedIn: false
    })


    useEffect(async () => {
        axios.get(`https://api.coinlore.com/api/ticker/?id=2713`)
            .then(res => {
                backofficeContextL.dispatchM({ type: 'SetusdValue', payload: res.data[0].price_usd })
            })
            .catch(err => {
                console.log(err)
                window.location.reload(false);
            })

        await new Promise(resolve => {
            const tronWebState = {
                installed: !!window.tronWeb,
                loggedIn: window.tronWeb && window.tronWeb.ready
            };
            if (tronWebState.installed) {
                settronWeb(tronWebState)
                return resolve();
            }
            let tries = 0;
            const timer = setInterval(() => {
                if (tries >= 10) {
                    const TRONGRID_API = process.env.REACT_APP_NETWORK;
                    window.tronWeb = new TronWeb(
                        TRONGRID_API,
                        TRONGRID_API,
                        TRONGRID_API
                    );

                    settronWeb({
                        installed: false,
                        loggedIn: false
                    });

                    clearInterval(timer);
                    return resolve();
                }

                tronWebState.installed = !!window.tronWeb;
                tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;
                if (!tronWebState.installed) {
                    return tries++;
                }
                else {
                    clearInterval(timer);
                }
                settronWeb(tronWebState)
                resolve();
            }, 100);
        })

        await Utils.setTronWeb(window.tronWeb);
        if (localStorage.getItem('backOfficeID') !== null && localStorage.getItem('accessToken') === 'Login') {
            setTronAccount(localStorage.getItem('backOfficeID'))
            try {
                const lastlavel = await Utils.contract.users(localStorage.getItem('backOfficeID')).call();
                const x12balance = await Utils.contract.x12balance(localStorage.getItem('backOfficeID')).call();
                setx12balanceTRX((parseInt(x12balance._hex) / 1000000));
                console.log("x12balance", (parseInt(x12balance._hex) / 1000000))
                setUserId(lastlavel.id._hex)
                setpartnersCount(lastlavel.partnersCount._hex)
                backofficeContextL.dispatchM({ type: 'partnerCount', payload: lastlavel.partnersCount._hex })
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            setTronAccount(window.tronWeb.defaultAddress.base58)
            try {
                const lastlavel = await Utils.contract.users(window.tronWeb.defaultAddress.base58).call();
                setUserId(lastlavel.id._hex)
                setpartnersCount(lastlavel.partnersCount._hex)
                backofficeContextL.dispatchM({ type: 'partnerCount', payload: lastlavel.partnersCount._hex })
            }
            catch (error) {
                console.log(error)
            }
        }
    }, []);

    function getFlooredFixed(v, d) {
        return (Math.floor(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
    }

    return (
        <>  
            {/*User Info*/}
            <div className="col-lg-3 dash-card">
                <div className="h-100 d-flex border inner bg-clear mr-3 flex-column p-3">
                    <h3 className="text-left">Welcome!</h3>
                    <div className="d-flex">
                        <div className="icon-wrap">
                            <h2><FaRegUserCircle/></h2>
                        </div>
                        <div className="text-wrap">
                            <h2>User 
                                        { parseInt(UserId) === 0 ?
                                        <img className="loading-spinner" src={spinner}/>
                                        :
                                        <span><strong>{parseInt(UserId)}</strong></span>
                                        }
                            </h2>
                            <h3 className="text-left">Member</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*Total Earnings*/}
            <div className="col-lg-3 dash-card">
                <div className="h-100 d-flex border inner bg-clear mr-3 flex-column p-3">
                    <h3 className="text-left">Total Earnings</h3>
                    <div className="d-flex">
                        <div className="icon-wrap">
                            <h2><img src={tron32x} className="tron_currency" alt="tron32x" /></h2>
                        </div>
                        <div className="text-wrap">
                            <h2>{backofficeContextL.backofficeDataM.total5x + x12balanceTRX} <small>TRX</small></h2>
                            <h3 className="text-left secondary-text">${getFlooredFixed(((backofficeContextL.backofficeDataM.total5x + x12balanceTRX) * backofficeContextL.backofficeDataM.usdValue), 2)} USD</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*Direct Earnings*/}
            <div className="col-lg-3 dash-card">
                <div className="h-100 d-flex border inner bg-clear mr-3 flex-column p-3">
                    <h3 className="text-left">Direct Earnings</h3>
                    <div className="d-flex">
                        <div className="icon-wrap">
                            <h2><img src={tron32x} className="tron_currency" alt="tron32x" /></h2>
                        </div>
                        <div className="text-wrap w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>{backofficeContextL.backofficeDataM.total5x} TRX</h2>
                                <h2 className="whitext"><FaUsers color="#ff6e81" /> {parseInt(partnersCount)}</h2>
                            </div>
                            <h3 className="text-left secondary-text">${getFlooredFixed((backofficeContextL.backofficeDataM.total5x * backofficeContextL.backofficeDataM.usdValue), 2)} USD</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*Team Earnings*/}
            <div className="col-lg-3 dash-card">
                <div className="h-100 d-flex border inner bg-clear flex-column p-3 ">
                    <h3 className="text-left">Team Earnings</h3>
                    <div className="d-flex">
                        <div className="icon-wrap">
                            <h2><img src={tron32x} className="tron_currency" alt="tron32x" /></h2>
                        </div>
                        <div className="text-wrap w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>{x12balanceTRX} TRX</h2>
                                <h2 className="whitext"><FaUsers color="#ff6e81" /> {parseInt(backofficeContextL.backofficeDataM.partnerCountM2)}</h2>
                            </div>
                            <h3 className="text-left secondary-text">${getFlooredFixed((x12balanceTRX * backofficeContextL.backofficeDataM.usdValue), 2)} USD</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*
            <div className="col-lg-3">
                <TostContainer />
                <div className="userdefinition">
                    <div className="paymentlogo">
                        {
                            lang === "English"
                                ?
                                <h3 className="whitext">MY ID: <span className="ctatext">{parseInt(UserId)}</span></h3>
                                :
                                <h3 className="whitext">MI ID: <span className="ctatext">{parseInt(UserId)}</span></h3>
                        }
                    </div>
                </div>
                {
                    lang === 'English' ?
                        <h3 className="whitext">Total Earnings</h3>
                        :
                        <h3 className="whitext">Ganancias Totales</h3>
                }
                <h2 className="text-left ctatext">
                    $ {getFlooredFixed(((backofficeContextL.backofficeDataM.total5x + x12balanceTRX) * backofficeContextL.backofficeDataM.usdValue), 2)} USD
                </h2>
                <h2 className="subtext earning_amount text-left">{backofficeContextL.backofficeDataM.total5x + x12balanceTRX} TRX <img src={tron32x} className="tron_currency" alt="tron32x" /></h2>
                <hr className="custom_hr" />
                <div className="matrix_earnings" style={{ paddingTop: "0" }}>
                    <div style={{ display: "flex" }}>
                        <img className="matrix_logo" src={x5matrix} alt="x5matrix" />
                        <div className="userinfo text-right" style={{ marginTop: "20%" }}>
                            <h3 className="whitext">{parseInt(partnersCount)} <FaUsers color="#35FF69" /></h3>
                        </div>
                    </div>
                    {
                        lang === 'English' ?
                            <h3 className="whitext">Earnings</h3>
                            :
                            <h3 className="whitext">Ganancias M1</h3>
                    }
                    <div className="earning_amount_container">
                        <h2 className="ctatext earning_amount">$ {getFlooredFixed((backofficeContextL.backofficeDataM.total5x * backofficeContextL.backofficeDataM.usdValue), 2)} USD</h2>
                    </div>
                    <h2 className="earning_amount_trx subtext">{backofficeContextL.backofficeDataM.total5x} TRX  <img src={tron32x} className="tron_currency" alt="tron32x" /></h2>
                </div>
                <hr className="custom_hr" />
                <div className="matrix_earnings" style={{ paddingTop: "0" }}>
                    <div style={{ display: "flex" }}>
                        <img className="matrix_logo" src={x12matrix} alt="x12matrix" />
                        <div className="userinfo text-right" style={{ marginTop: "20%" }}>
                            <h3 className="whitext">{parseInt(backofficeContextL.backofficeDataM.partnerCountM2)} <FaUsers color="#35FF69" /></h3>
                        </div>
                    </div>
                    {
                        lang === 'English' ?
                            <h3 className="whitext">Earnings</h3>
                            :
                            <h3 className="whitext">Ganancias</h3>
                    }
                    <div className="earning_amount_container">
                        <h2 className="ctatext earning_amount">$ {getFlooredFixed((x12balanceTRX * backofficeContextL.backofficeDataM.usdValue), 2)} USD</h2>
                    </div>
                    <h2 className="earning_amount_trx subtext">{x12balanceTRX} TRX  <img src={tron32x} className="tron_currency" alt="tron32x" /></h2>
                </div>
            </div>
            */}

            {/*<div className="affiliate_wrap xwrap">
                <div className="affiliate_heading">
                    {
                        lang === 'English' ?
                            <h3 className="ctatext">Affiliate Link</h3>
                            :
                            <h3 className="ctatext">Enlace de afiliado</h3>
                    }
                    <h3 className="whitext">{parseInt(partnersCount)} <FaUsers color="#35FF69" /></h3>
                </div>
                <div className="link_container">
                    <input type="text" value={`https://xtron.online/#/registration/${parseInt(UserId)}`} id="refLink" readOnly />
                    <FaRegCopy className="ctatext" onClick={copyAffiliateLink} />
                </div> 
            </div>
            <div className="wallet_wrap xwrap">
                {
                    lang === 'English' ?
                        <h3 className="ctatext">My Wallet:</h3>
                        :
                        <h3 className="ctatext">Mi billetera:</h3>
                }
                <p className="whitext">{tronAccount}</p>
            </div>
            <div className="contract_wrap xwrap">
                {
                    lang === 'English' ?
                        <h3 className="ctatext">Contract Address :</h3>
                        :
                        <h3 className="ctatext">Dirección del contrato:</h3>
                }
                <a href={`https://tronscan.org/#/contract/TWDECXnA4oAGrDYRNS7ex1izx3Mgys9SRp/transactions`} rel="noreferrer" target="_blank"> <p className="whitext">TWDECXnA4oAGrDYRNS7ex1izx3Mgys9SRp</p></a>
            </div>*/}
        </>
    )
}

export default BackOfficeSideDashboard
