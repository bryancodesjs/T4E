import React, { useEffect, useState } from 'react'
import Faq from './Faq'
import Features from './Features'
import Matrix from './Matrix'
import { useHistory } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import headimg from '../../assets/img/waifu.png'
import minitron from '../../assets/img/mini-tron.png'
import t4elogo from '../../assets/img/tron alliance logo.png'
import { Link } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa";
import usaflag from '../../assets/img/usaflag.png'
function LandingMian(props) {
    const propslang = props.location && props.location.state
    useEffect(() => {
        document.title = "Tron For Everyone"
    }, []);

    const [lang, setLang] = useState(propslang === "Spanish" ? "Spanish" : "English")
    const history = useHistory();
    const navigateTo = (url) => {
        history.push({
            pathname: url,
            state: lang
        })
    }

    return (
        <>
            {/* <Heading /> */}
            <div className="navig d-flex justify-content-center">
            <div className="container d-flex justify-content-between align-items-center">

                <Link to={{
                    pathname: "/",
                    state: lang
                }} className="logo-payment-link">
                    <img className="logo-payment-nav" src={t4elogo} alt="logo xtron" />
                </Link>


                <div className="action-links">
                    <select name="lang" id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                    </select>

                    <Link to={{
                        pathname: "/back-office-main",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">Home</span>
                    </Link>

                    <Link to={{
                        pathname: "/back-office-main",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">Dashboard</span>
                    </Link>

                    <Link to={{
                        pathname: "/tutorial",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">Tutorial</span>
                    </Link>

                    <Link to={{
                        pathname: "/tutorial",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">Tutorial</span>
                    </Link>

                    <Link to={{
                        pathname: "/tutorial",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">Tutorial</span>
                    </Link>

                    <button className="btn btn-outline-success custombtn-3" onClick={() => navigateTo('/login')}>
                            {lang === 'English' ? "Login" : "Login"}
                    </button>
                </div>
            </div>
        </div>
            <div className="container text-center">
                
                
                <div className="heading-content d-flex flex-row">
                    <div className="col-md-6 left-heading text-left">
                    <h1 className="mt-5 whitext heading-title"><strong>
                        {lang === 'English' ? "Invest once. Earn TRX Forever" 
                        : 
                        "Gana compartiendo oportunidades"}</strong></h1>
                    <h3 className="whitext lightweight">
                        {lang === 'English' ? 
                        "Join the first Smart Contract that pays you to share content on your Social Media Apps. Instant payouts, up to 100% commission." 
                        : 
                        "Únete al primer Contrato Inteligente que te paga por compartir contenido en tus redes sociales. Pagos instantaneos, hasta 100% en comisiones."}</h3>
                    <div className="mt-5">
                        <button className="btn btn-success custombtn" onClick={() => navigateTo('/registration')}>
                            {lang === 'English' ? "Start Earning Now" : "Comenzar a Ganar"}
                        </button>
                    </div>
                    </div>
                    <div className="col-md-6 right-heading">
                        <img className="heading-woman" src={headimg} alt="woman holding a phone earning tron"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-accent">
                <div className="container">
                    <h4 className="pt-4 pb-4">
                        {lang === 'English' ?
                        "HYBRID COMMISSION PLAN"
                        :
                        "PLAN DE COMISIONES HÍBRIDO"
                        }
                    </h4>
                    <div className="d-flex">
                        <div className="col-lg-3 pb-4">
                            <h3>
                                {lang === 'English' ?
                                    "Direct"
                                    :
                                    "Directo"
                                }
                            </h3>
                            <h1>100% CPA</h1>
                            <h4>
                                {lang === 'English' ?
                                    "For every direct affiliate"
                                    :
                                    "Por cada afiliado directo"
                                }
                            </h4>
                        </div>
                        <div className="col-lg-1 pb-4 d-flex align-items-center">
                            <h1>+</h1>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <h3>Residual</h3>
                            <h1>20% CPA</h1>
                            <h4>
                                {lang === 'English' ?
                                "From up to 248,832‬ indirect affiliates in your team"
                                :
                                "De 248,832 posiciones disponibles en tu equipo"
                                }
                                
                            </h4>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center bg-gray">
                <div className="heading-square bg-accent d-flex justify-content-center">
                    <h3><img className="minitron" src={minitron} alt="mini tron logo"/></h3>
                </div>
            </div>
            <Features lang={lang} />
            <div className="container-fluid d-flex justify-content-center">
                <div className="heading-square bg-gray d-flex justify-content-center">
                    <h3 className="minicash"><b>$</b></h3>
                </div>
            </div>
            {/*<Counter lang={lang} />*/}
            <br /><br /><br />
            <Matrix lang={lang} />
            {/*<Faq lang={lang} />*/}
                    <p className="text-center" id="address">
                    {lang === 'English' ? "Support" : "Soporte"} : <a rel="noreferrer" target="_blank" href="mailto:support@xtron.online">support@xtron.online <FaExternalLinkAlt /></a>
                    </p>
                    <p className="text-center" id="address">
                    {lang === 'English' ? "Contract address" : "Direccion del contrato"} : <a rel="noreferrer" target="_blank" href={`https://tronscan.org/#/contract/TWDECXnA4oAGrDYRNS7ex1izx3Mgys9SRp/transactions`}>TWDECXnA4oAGrDYRNS7ex1izx3Mgys9SRp <FaExternalLinkAlt /></a>
                    </p>
            <h4 className="text-center pb-5 signature">XTRON GLOBAL 2021</h4>
        </>
    )
}


export default LandingMian
