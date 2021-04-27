import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer'
import MyNav from '../BackOffice/Nav'
import Banner from './Banner'
import post from './post.png'
import linkImg from './link.png'
import reg1 from './reg1.jpg'
import reg2 from './reg2.png'
import reg3 from './reg3.jpg'
import upgrade from './upgrade.png'
import directCommission from './directCommission.jpg'
import teamCommission from './teamCommission.png'
import directLicense from './direct-license-tutorial-img.png'
import { FaChevronRight, FaChevronLeft, FaRegLightbulb, FaExternalLinkAlt } from "react-icons/fa";

function backToStepOne() {
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('slide-in-left');
}
function stepTwo() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('step2').classList.add('slide-in-right');
    document.getElementById('scrollTarget').scrollIntoView(); //This ensures the viewport is scrolled top the top of the section
}
function backTwoStepTwo() {
    document.getElementById('step2').classList.add('active');
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step2').classList.add('slide-in-left');
}
function stepThree() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    document.getElementById('step3').classList.add('slide-in-right');
    document.getElementById('scrollTarget').scrollIntoView();
}
function backToStepThree() {
    document.getElementById('step3').classList.add('active');
    document.getElementById('step4').classList.remove('active');
    document.getElementById('step3').classList.add('slide-in-left');
}
function stepFour() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step4').classList.add('active');
    document.getElementById('step4').classList.add('slide-in-right');
    document.getElementById('scrollTarget').scrollIntoView();
}
function Tutoril() {
    return (
        <div class="">
            <MyNav />
            <Banner />
            <div id="scrollTarget"></div>
            <div class="container">
                <div class="row ">
                    <div class="xwrap mt-5 p-4">
                        <div id="step1" class="tutorial-section active slide-in-right">
                            <h1 class=""><strong>How does Tron Alliance work?</strong></h1>
                            <p class="whitext">
                                Tron Alliance helps you monetize your social media accounts by providing a highly profitable
                                product which you can share and earn limitless commissions from.
                                </p>
                            <div className="alert alert-success" role="alert">
                                <p class="whitext">
                                    The only requirement to be participate in Tron Alliance Peer-To-Peer Cash Program is to complete the registration process by
                                    purchasing your unique affiliate license.
                                    </p>
                            </div>
                            <h2 className="mt-5 mb-2 text-center"><strong>Your Toolkit</strong></h2>
                            <p className="text-center"><i>This is all you need to make money. You receive your toolkit right after completing your registration.</i></p>
                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={post} alt="share, earn, repeat with tron alliance" />
                                    <h2 className=""><strong>Professional Content</strong></h2>
                                    <p className="text-center">Choose among professionally designed flyers.</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={linkImg} alt="share, earn, repeat with tron alliance" />
                                    <h2 className=""><strong>Your Link</strong></h2>
                                    <p className="text-center">Append your link to the flyer and post it on your social media.</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={directLicense} alt="share, earn, repeat with tron alliance" />
                                    <h2 className=""><strong>Your License</strong></h2>
                                    <p className="text-center">When a new user joins and buys his affiliate license, you earn an instant commission.</p>
                                </div>

                            </div>

                            <div className="d-flex justify-content-end flex-wrap mb-5">
                                <button className="btn btn-primary oge" onClick={() => stepTwo()}>Registration <FaChevronRight /></button>
                            </div>

                        </div>

                        <div id="step2" class="tutorial-section">
                            <h1 class=""><strong>Registration</strong></h1>
                            <p>
                            Once you register, you become a licensed affiliate and can benefit from Tron Alliance Peer-to-Peer (P2P) cash program. Register following these 3 simple steps:
                            </p>

                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <div className="col-lg-4 flex-column align-items-center d-flex p-4 text-center">
                                    <img className="reg-img shadow mb-4" src={reg1} alt="share, earn, repeat with tron alliance" />
                                    <p>Navigate to the registration page and enter your sponsor's ID.</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex p-4 text-center">
                                    <img className="reg-img shadow mb-4" src={reg2} alt="share, earn, repeat with tron alliance" />
                                    <p>Your wallet will be triggered. Approve your registration payment.</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex p-4 text-center">
                                    <img className="reg-img shadow mb-4" src={reg3} alt="share, earn, repeat with tron alliance" />
                                    <p>Your account is ready and now you can start referring and earning.</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <button className="btn btn-outline-primary" onClick={() => backToStepOne()}><FaChevronLeft /> How it works</button>
                                <button className="btn btn-primary oge" onClick={() => stepThree()}>How to make money <FaChevronRight /></button>
                            </div>

                        </div>

                        <div id="step3" class="tutorial-section">
                            <h1 class=""><strong>How to make money</strong></h1>
                            <p class="whitext">
                                You make money by promoting our Affiliate Licenses. When your account is created you receive two licenses: 
                            </p>
                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <h2 className=""><strong><span className="accent">1.</span> Direct License</strong></h2>
                                    <img className="direct-license-img" src={directCommission} alt="share, earn, repeat with tron alliance" />
                                    <p>
                                    Everytime a new user registers using your <i>Affiliate Link</i> or your user ID, you earn a 100% commission 
                                    based on the value of the license.
                                    </p>
                                    <h4>A 200TRX direct license gives you 200TRX direct commission.</h4>
                                </div>
                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <h2 className=""><strong><span className="accent">2.</span> Team License</strong></h2>
                                    <img className="direct-license-img" src={teamCommission} alt="share, earn, repeat with tron alliance" />
                                    <p>
                                    Everytime anyone in your <span title="Someone you have directly referred using your ID">team</span> refers a new user, 
                                    you instantly get a 20% commission based on the value of the license.
                                    </p>
                                    <h4>A 200TRX team license gives you a 40TRX team commission.</h4>
                                </div>
                            </div>
                            <div className="alert alert-success mb-5" role="alert">
                                <p class="whitext">
                                    All commissions you earn are instantly deposited to your TRX wallet. Tron Alliance is a smart contract and as such, 
                                    all the money is instantly distributed to the users.
                                </p>
                            </div>
                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <button className="btn btn-outline-primary" onClick={() => backTwoStepTwo()}><FaChevronLeft /> Registration</button>
                                <button className="btn btn-primary oge" onClick={() => stepFour()}>Boost your earnings <FaChevronRight /></button>
                            </div>
                        </div>

                        <div id="step4" class="tutorial-section">
                            <h1 class=""><strong>Boost your earnings</strong></h1>
                            <p class="whitext">
                                Tron Alliance was designed to help you earn as much money as you want and you can quickly boost 
                                your earnings by <strong><em>upgrading any of your licenses.</em></strong> Upgrading is optional, 
                                but your earning potential is multiplied 2x with every additional level you buy.
                            </p>
                            <h2 className="text-center">Upgrade your license by purschasing the next level</h2>
                            <h2 className="text-center mb-4 accent">
                                <strong>There are 12 levels for each license</strong>
                            </h2>
                            <div className="d-flex justify-content-center flex-wrap mb-2">
                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <h2 className=""><strong>Level 1</strong></h2>
                                    <h3>
                                        <strong>
                                        <span className="accent">200TRX per referral</span>
                                        </strong>
                                    </h3>
                                    <img className="direct-license-img" src={directCommission} alt="share, earn, repeat with tron alliance" />
                                    
                                </div>
                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <h2 className=""><strong>Level 2</strong></h2>
                                    <h3>
                                        <strong>
                                        <span className="accent">400TRX per referral</span>
                                        </strong>
                                    </h3>
                                    <img className="direct-license-img" src={upgrade} alt="share, earn, repeat with tron alliance" />
                                    
                                </div>
                            </div>
                            <p className="text-center mb-3"><em>Example upgrading the direct license.</em></p>
                            <div className="alert alert-success mb-5" role="alert">
                                <h2 class="alert-heading"><FaRegLightbulb/> Grow organically</h2>
                                <p class="whitext">
                                    Although you can purchase all levels using your own TRX, we highly encourage you to do it using your affiliate profits. 
                                    This way you invest out of your pocket only once and keep growing organically from the business itself.
                                </p>
                            </div>
                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <button className="btn btn-outline-primary" onClick={() => backToStepThree()}><FaChevronLeft /> How to make money</button>
                                <Link to={{
                                    pathname: "/faq"
                                }} className="btn btn-primary oge">FAQ <FaExternalLinkAlt/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Tutoril
