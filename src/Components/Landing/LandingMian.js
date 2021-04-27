import React, { useEffect, useState } from 'react'
import Features from './Features'
import Matrix from './Matrix'
import Footer from '../Footer/footer'
import { useHistory } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import headimg from '../../assets/img/waifu.png'
import minitron from '../../assets/img/mini-tron.png'
import t4elogo from '../../assets/img/tron alliance logo.png'
import languageIcon from '../../assets/img/translate.svg'
import { Link } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";

function LandingMian(props) {
    const propslang = props.location && props.location.state
    useEffect(() => {
        document.title = "Tron Alliance"
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
                    <img className="language-switch-icon mr-2" src={languageIcon} alt="language icon indicator"/>
                    <select name="lang" id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                        <option value="English">English</option>
                        <option value="Spanish">中文(简体)</option>
                    </select>

                    <Link to={{
                        pathname: "/back-office-main",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">
                        {lang === 'English' ? "Dashboard" : "仪表板"}
                        </span>
                    </Link>

                    <Link to={{
                        pathname: "/tutorial",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">
                        {lang === 'English' ? "Tutorial" : "教程"}
                        </span>
                    </Link>

                    <Link to={{
                        pathname: "/login",
                        state: lang
                    }} className="navicon">
                        <span className="naviconTXT">
                        {lang === 'English' ? "Login" : "登录"} <FaSignInAlt/>
                        </span>
                    </Link>

                </div>
            </div>
        </div>
            <div className="container text-center">
                
                
                <div className="heading-content d-flex flex-row flex-wrap">
                    <div className="col-md-6 left-heading text-left">
                    <h1 className="mt-5 whitext heading-title slide-in-left delay-1"><strong>
                        {lang === 'English' ? "Share a single product. Earn limitless TRX." 
                        : 
                        "分享一个产品。赚取无限的TRX。"}</strong></h1>
                    <p className="whitext lightweight slide-in-left delay-2">
                        {lang === 'English' ? 
                        "Join the first Smart Contract that pays you to share content on your Social Media Apps. Instant payouts, up to 100% commission." 
                        : 
                        "加入第一个智能合约，支付你在社交媒体应用程序上分享内容。即时支付，高达100%的佣金。"}</p>
                    <div className="mt-5">
                        <button className="btn btn-success custombtn slide-in-left delay-3" onClick={() => navigateTo('/registration')}>
                            {lang === 'English' ? "Start Earning Now" : "现在就开始挣钱"} <FaSignInAlt/>
                        </button>
                    </div>
                    </div>
                    <div className="col-md-6 right-heading">
                        <img className="heading-woman slide-in-right delay-3" src={headimg} alt="woman holding a phone earning tron"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-accent">
                <div className="container">
                    <h4 className="pt-4 pb-4">
                        {lang === 'English' ?
                        "HYBRID COMMISSION PLAN"
                        :
                        "混合佣金计划"
                        }
                    </h4>
                    <div className="d-flex flex-wrap">
                        <div className="col-lg-3 pb-4 slide-in-bottom delay-3">
                            <h3>
                                {lang === 'English' ?
                                    "Direct"
                                    :
                                    "直接"
                                }
                            </h3>
                            <h1>100% CPA</h1>
                            <p>
                                {lang === 'English' ?
                                    "For every direct affiliate"
                                    :
                                    "对于每一个直接关联公司"
                                }
                            </p>
                        </div>
                        <div className="col-lg-1 pb-4 d-flex align-items-center">
                            <h1>+</h1>
                        </div>
                        <div className="col-lg-4 pb-4 slide-in-bottom delay-4">
                            <h3>
                            {lang === 'English' ?
                                    "Residual"
                                    :
                                    "剩余"
                                }
                            </h3>
                            <h1>20% CPA</h1>
                            <p>
                                {lang === 'English' ?
                                "From up to 248,832‬ indirect affiliates in your team"
                                :
                                "从你的团队中最多有248,832个间接附属机构"
                                }
                                
                            </p>
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
            <Matrix lang={lang} />
            
            <Footer lang={lang}/>
        </>
    )
}


export default LandingMian
