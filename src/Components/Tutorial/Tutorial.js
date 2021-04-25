import React from 'react'
import MyNav from '../BackOffice/Nav'
import Banner from './Banner'
import post from './post.png'
import linkImg from './link.png'
import reg1 from './reg1.jpg'
import reg2 from './reg2.png'
import reg3 from './reg3.jpg'
import directCommission from './directCommission.jpg'
import teamCommission from './teamCommission.png'
import directLicense from './direct-license-tutorial-img.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function stepTwo() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('scrollTarget').scrollIntoView(); //This ensures the viewport is scrolled top the top of the section
}
function stepThree() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    document.getElementById('scrollTarget').scrollIntoView();
}
function stepFour() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step4').classList.add('active');
    document.getElementById('scrollTarget').scrollIntoView();
}
function Tutoril() {
    return (
        <div class="" id="backofficewrap">
            <MyNav />
            <Banner />
            <div id="scrollTarget"></div>
            <div class="container">
                <div class="row ">
                    <div class="xwrap mt-5 p-4">
                        <div id="step1" class="tutorial-section active">
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
                                    <img className="direct-license-img" src={directLicense} alt="share, earn, repeat with tron alliance" />
                                    <h2 className=""><strong>Your License</strong></h2>
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={linkImg} alt="share, earn, repeat with tron alliance" />
                                    <h2 className=""><strong>Your Link</strong></h2>
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={post} alt="share, earn, repeat with tron alliance" />
                                    <h2 className=""><strong>Professional Content</strong></h2>
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
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
                                    <p>Your account is ready and know you can start referring and earning.</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <button className="btn btn-outline-primary"><FaChevronLeft /> How it works</button>
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
                                <button className="btn btn-outline-primary"><FaChevronLeft /> Registration</button>
                                <button className="btn btn-primary oge" onClick={() => stepFour()}>Boost your earnings <FaChevronRight /></button>
                            </div>
                        </div>

                        <div id="step4" class="tutorial-section">
                            <h1 class=""><strong>Boost your earnings</strong></h1>
                            <p class="whitext">
                                There's no limit to how much you can earn. 
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
                                <button className="btn btn-outline-primary"><FaChevronLeft /> Registration</button>
                                <button className="btn btn-primary oge" onClick={() => stepTwo()}>Boost your earnings <FaChevronRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutoril
