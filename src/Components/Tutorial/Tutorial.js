import React from 'react'
import MyNav from '../BackOffice/Nav'
import Banner from './Banner'
import post from './post.png'
import linkImg from './link.png'
import reg1 from './reg1.jpg'
import reg2 from './reg2.png'
import directLicense from './direct-license-tutorial-img.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Tutoril() {
    return (
        <div class="" id="backofficewrap">
            <MyNav />
            <Banner />
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

                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <button className="btn btn-outline-primary"><FaChevronLeft /> Home Page</button>
                                <button className="btn btn-primary oge">Registration <FaChevronRight /></button>
                            </div>

                        </div>

                        <div id="step2" class="tutorial-section">
                            <h1 class=""><strong>Registration</strong></h1>
                            <p>
                            Once you register, you become a licensed affiliate and can benefit from Tron Alliance Peer-to-Peer (P2P) cash program. Register following these 3 simple steps:
                            </p>

                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <div className="col-lg-4 flex-column align-items-center d-flex p-4">
                                    <img className="reg-img shadow mb-2" src={reg1} alt="share, earn, repeat with tron alliance" />
                                    <p>Navigate to the registration page and enter your sponsor's ID.</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex p-4">
                                    <img className="reg-img shadow mb-2" src={reg2} alt="share, earn, repeat with tron alliance" />
                                    <p>Your wallet will be triggered. Approve your registration payment.</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex p-4">
                                    <img className="direct-license-img mb-2" src={post} alt="share, earn, repeat with tron alliance" />
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between flex-wrap mb-5">
                                <button className="btn btn-outline-primary"><FaChevronLeft /> How it works</button>
                                <button className="btn btn-primary oge">How to make money <FaChevronRight /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutoril
