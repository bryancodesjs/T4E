import React, { useEffect, useState } from 'react'
import xtronLogo from '../../assets/img/xtronlong.png'
import { Link, useHistory, useParams } from 'react-router-dom';
import TronWeb from 'tronweb'
import { toast } from 'react-toastify';
import { FaExclamationCircle, FaSignInAlt } from "react-icons/fa";
import ToastContainerCust from '../../Common/ToastContainerCust'
import Utils from '../../Utils/Utils'
import { MyClockLoader } from '../../Common/Loader'
import t4elogo from '../../assets/img/tron alliance logo.png'


function Registration(props) {
    const lang = props.location && props.location.state
    const history = useHistory();
    const [backOfficeID, SetBackOfficeID] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [isModalOpen, SetisModalOpen] = useState(false)
    const [tronWeb, settronWeb] = useState({
        installed: false,
        loggedIn: false
    })
    const { id } = useParams();
    const CustomToastWithLink = () => (
        <p>
            Please login to your Tronlink account
        </p>
    );

    useEffect(async () => {
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
        setLoggedIn(true)
    }, []);

    const registationSubmit = async () => {
        let warnmsg = "Porfavor no actualice la página y espere mientras su pago es procesado. Esto puede tardar unos minutos."

        localStorage.removeItem('backOfficeID')
        if (backOfficeID !== '' || id !== undefined) {
            if (loggedIn) {
                try {
                    SetisModalOpen(true)
                    if (lang === 'English') {
                        warnmsg = "Please do not refresh the page and wait while your payment is processed. This may take a few minutes."
                    }
                    toast.warn(warnmsg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    const idToAddress = await Utils.contract.idToAddress(backOfficeID).call();
                    const tronAdd = TronWeb.address.fromHex(idToAddress)
                    await Utils.contract.registrationExt(tronAdd).send({
                        feeLimit: 100000000,
                        callValue: 440000000,
                        shouldPollResponse: true
                    });
                    SetisModalOpen(false)
                    history.push({
                        pathname: "/back-office-main",
                        state: { lang: lang }
                    })
                    
                    window.location.reload(false);
                } catch (error) {
                    SetisModalOpen(false)
                    console.log(error)
                    toast.error("error", error)
                }
            }
            else {
                toast.error(CustomToastWithLink)
            }
        }
        else {
            if (lang === 'English') {
                toast.warn("Enter your sponsor's ID")
            }
            else {
                toast.warn("Ingrese el ID de su patrocinador")
            }
        }
    }

    return (
        <div className="bg-clear" id="backofficewrap">
            <ToastContainerCust />
            <div className="container">
                <div className="text-center logo-payment-wrap">
                    {
                        isModalOpen ?
                            <div className="logo-payment-link">
                                <img className="logo-login" src={t4elogo} alt="logo xtron" />
                            </div> :
                            <Link to={{
                                pathname: "/",
                                state: lang
                            }} className="logo-payment-link">
                                <img className="logo-login" src={t4elogo} alt="logo xtron" />
                            </Link>
                    }

                </div>
                <div className="row " id="">
                    <div className="registration-main d-flex justify-content-center" style={{ width: "100%" }}>
                        <div className="xwrap2">
                            <div className="text-center registration-items">
                                {
                                    lang === 'English' ?
                                        <h2>Register</h2>
                                        :
                                        <h2>Pending for translation</h2>
                                }
                                {
                                    lang === 'English' ?
                                        <p>Please enter your sponsor's ID</p>
                                        :
                                        <p>Pending for translation</p>
                                }


                                <MyClockLoader active={isModalOpen} />
                                {id ?
                                    <div className="registration-input">
                                        <input type="text" value={id} className="sponsor-input-box text-center" onChange={(e) => SetBackOfficeID(e.target.value)} readOnly />
                                    </div>
                                    :
                                    <div className="registration-input">
                                        <input type="text" value={backOfficeID} className="sponsor-input-box text-center" onChange={(e) => SetBackOfficeID(e.target.value)} />
                                    </div>
                                }
                                <div className="registration-btn mb-2">
                                    <button className="btn btn-success full-width custombtn" onClick={() => registationSubmit()} disabled={isModalOpen} >{lang === 'English' ? "REGISTER" : "REGISTRO"}</button>
                                </div>
                                {
                                    lang === 'English' ?
                                        <h4><FaExclamationCircle /> Please confirm your sponsor's ID before making a payment.</h4>
                                        :
                                        <h4><FaExclamationCircle /> Verifique el ID de su patrocinador antes de realizar un pago.</h4>
                                }
                                <div className="h20"></div>
                                {
                                    isModalOpen ? <span><h4><FaSignInAlt /> Login</h4></span> : <Link to={{ pathname: "/login", state: lang }}><h4><FaSignInAlt /> Login</h4></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
