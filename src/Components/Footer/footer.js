import React from 'react'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaTelegramPlane, FaInstagram } from "react-icons/fa";

function Footer(props) {
    let lang = props.lang

    return (
        <footer className="footer w-100" >
            <div className="container mx-auto d-flex flex-column">
                <div className="d-flex flex-wrap pb-3">
                    <div className="col-lg-3 footer-block pt-3"><h2>Tron Alliance</h2></div>
                    <div className="col-lg-3 footer-block d-flex flex-column pt-3">
                        <h2>About</h2>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>Privacy Policy</span>
                        </Link>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>Terms of Use</span>
                        </Link>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>Contract Explorer</span>
                        </Link>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>FAQ</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 footer-block d-flex flex-column pt-3">
                        <h2>Resources</h2>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>Tutorial</span>
                        </Link>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>Academy</span>
                        </Link>
                        <Link to={{
                        pathname: "/",
                        state: lang
                        }}> <span>Promotional Resources</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 footer-block d-flex flex-column pt-3">
                        <h2>Community</h2>
                        <div className="d-flex">
                        <Link to={{pathname:"/"}}><FaTelegramPlane/></Link>
                        <Link to={{pathname:"/"}}><FaInstagram/></Link>
                        </div>
                    </div>
                </div>
                <h4 className="text-center">
                    {lang === 'English' ? "Support" : "支持"} : <a rel="noreferrer" target="_blank" href="mailto:support@tronalliance.club">support@tronalliance.club <FaExternalLinkAlt /></a>
                </h4>
                <h4 className="text-center pb-5 signature">创联俱乐部2021年</h4>
            </div>
        </footer>
    );
}

export default Footer