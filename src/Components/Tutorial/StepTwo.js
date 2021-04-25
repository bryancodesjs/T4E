import { Link } from 'react-router-dom';
import post from './post.png'
import linkImg from './link.png'
import directLicense from './direct-license-tutorial-img.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function StepTwo() {
    return (
        <div class="container">
            <div class="row ">
                <div class="xwrap mt-5 p-4">
                    <div class="tutorial-section">
                        <h1 class=""><strong>Registration</strong></h1>
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
                            <Link to={{
                                pathname: "/",
                            }} className="btn btn-outline-primary">
                                <span className="naviconTXT"><FaChevronLeft />Home Page</span>
                            </Link>

                            <Link to={{
                                pathname: "/",
                            }} className="btn btn-primary">
                                <span className="naviconTXT">Registration <FaChevronRight /></span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepTwo