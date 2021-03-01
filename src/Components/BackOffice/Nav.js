import React, { useEffect, useReducer } from 'react'
import t4elogo from '../../assets/img/tronforeveryonelogo.png'
import { Link } from 'react-router-dom';
import { FaPowerOff, FaRegFileAlt, FaDollarSign } from "react-icons/fa";

function MyNav(lang) {
    
    return (
        <div className="navig d-flex justify-content-center">
            <div className="container d-flex justify-content-between align-items-center">

                <Link to={{
                    pathname: "/",
                    state: lang
                }} className="logo-payment-link">
                    <img className="logo-payment-nav" src={t4elogo} alt="logo xtron" />
                </Link>


                <div className="action-links">
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

                    <Link to={{
                        pathname: "/",
                        state: lang
                    }} className="logo-payment-link">
                        <FaPowerOff size={30} color={'#f33f3f'} />
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default MyNav