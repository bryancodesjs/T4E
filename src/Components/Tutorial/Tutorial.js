import React from 'react'
import tron32x from '../../assets/img/tron32x.png'
import x5matrix from '../../assets/img/m1.png'
import x12matrix from '../../assets/img/m2.png'
import m1dist from '../../assets/img/m1-dist.jpg'
import M2dist from '../../assets/img/M2-dist.jpg'
import reinvest from '../../assets/img/reinvest.jpg'
import post from './post.png'
import linkImg from './link.png'
import directLicense from './direct-license-tutorial-img.png'

import share from './like.png';
import { FaUsers, FaRegCopy, FaBook } from "react-icons/fa";
//import xtronLogo from '../../assets/img/xtronlong.png'
import MyNav from '../BackOffice/Nav'
//import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('G-6MQ8JWRM63'); /*Unique Google Analytics ID*/
ReactGA.pageview(window.location.pathname + window.location.search);


function Tutoril() {
    return (
        <div class="" id="backofficewrap">
            <MyNav />
            <div className="d-flex w-100 justify-content-center bg-accent">
                <h1 className="text-center whitext mt-5 mb-5">Tutorial <FaBook/></h1>
            </div>
            <div class="container">
                <div class="row " id="backoffice_row">
                    <div class="xwrap mt-5 p-4">
                        <div class="title_container">
                            {/* <!--<img src="./assets/img/m1.png" id="title_container_img"> --> */}

                            <h1 class=""><strong>How does Tron Alliance work?</strong></h1>
                            <p class="whitext">Tron Alliance helps you monetize your social media accounts by providing a highly profitable 
                            product which you can share and earn limitless commissions from. </p>
                            
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
                                    <img className="direct-license-img" src={directLicense} alt="share, earn, repeat with tron alliance"/>
                                    <h2 className=""><strong>Your License</strong></h2>
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={linkImg} alt="share, earn, repeat with tron alliance"/>
                                    <h2 className=""><strong>Your Link</strong></h2>
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
                                </div>

                                <div className="col-lg-4 flex-column align-items-center d-flex">
                                    <img className="direct-license-img" src={post} alt="share, earn, repeat with tron alliance"/>
                                    <h2 className=""><strong>Professional Content</strong></h2>
                                    <p>Lorem Ipsum Dolor Sit Amet</p>
                                </div>
                            </div>
                            
                            <h1 className=""><strong>Registration</strong></h1>
                                <p class="whitext">
                                    Once you register, you become a licensed affiliate and can benefit from Tron Alliance 
                                    Peer-to-Peer (P2P) cash program.
                                </p>
                            <br />

                            <h2 >Reinvestments</h2>
                            <p >A reinvestment clears the slot for you, so you can keep referring people and earning
                            money with your slots.
                                    </p>
                            <p >Reinvestments happen automatically the moment you refer a new user into the last free
                            place of a slot. Also, you reappear in a free space of your sponsor everytime a reinvestment happens to you.
                                    </p>
                            <br />

                            <h2 >Upgrade</h2>
                            <p >An upgrade is the opening a higher slot. It is done once, and then that new slot is yours forever. Your
                            upgrade payment goes to the person who referred you.
                                    </p>
                            <h4 >Why should you upgrade your matrix?</h4>
                            <p >Upgrading is optional, but your earning potential is multiplied with every additional slot
                            you buy. Let's look at it this way:
                                    </p>
                            <p >You can earn 6,400 TRX instantaneously for
                            every person you refer to the 6th slot of the M1 matrix. That's 25,600 TRX for every cycle!
                                    </p>
                            <br />
                            <h2 >Terms and Definitions</h2>
                            <ul >
                                <li>Sponsor:    The person whose referral link you used to sign up.</li>
                                <li>Referral:   A person who joins Xtron using your referral link.</li>
                                <li>Upgrade: It's the purchase of a higher slot in any matrix.</li>
                                <li>Reinvest:   It's an automatic re-opening of a slot to continue earning money from it.</li>
                                <li>Lost Profit:    Payment which goes to a higher partner because it comes from a matrix slot you have not purchased yet.</li>
                                <li>Extra Profit:   Payment which goes to you because a lower partner doesn't own a particular slot in their matrix.</li>
                                <li>Residual Income: Income which comes from your first 5 referral levels on the M2 matrix automatically.</li>
                            </ul>
                        </div>
                    </div>
                    <div ></div>
                </div>
            </div>
        </div>
    )
}

export default Tutoril
