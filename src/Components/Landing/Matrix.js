import React from 'react'
import hero from '../../assets/img/hero tron for everyone.png'
import leader from '../../assets/img/leader tron for everyone.png'
import { FaCaretRight } from "react-icons/fa";
function Matrix(props) {
    let lang = props.lang
    return (
        <div className="container mt-5" id="matrix">
            <div className="matrix_title text-center">
                <h2 className="heading-sub-title"> 
               
                    <span className="accent"><i>{lang === 'English'? "Choose":"Elige"}</i></span> {lang === 'English'? "your own commission path":"tu propia forma de comisiones"}
                </h2>
                <p className="">
                    {lang === 'English' ? 
                    "Earn as much as +$9,000 in TRX for every referral on the highest package" 
                    : 
                    "Gana hasta +$9,000 dólares en Tron por cada referido con la cuenta máxima"}
                </p>
                <p><i>
                    {lang === 'English'?
                    "All commissions are paid in TRX"
                    :
                    "Todas las comisiones se pagan en Tron (TRX)"
                    }
                </i></p>
                <div className="matrix-background-heading">
                    <h1>MAKE MONEY</h1>
                </div>
            </div>
            <div className="matrix_boxes mt-5">
                <div className="text-center p-50 col-md-5 d-flex justify-content-start bg-gray box-radius align-items-center commission-path">
                    <h2 className="">Hero</h2>
                    <h3 className="heavy">100% COMMISSION</h3>
                    <img className="commission-path-img" src={hero} alt="man holding his phone"/>
                    <h3><FaCaretRight className="accent"/>Invite your friends and get paid from 100TRX to 204,800TRX when they sign up and upgrade their accounts.</h3>
                </div>
                <div className="text-center p-50 col-md-5 d-flex justify-content-start bg-gray box-radius align-items-center commission-path">
                    <h2 className="">Leader</h2>
                    <h3 className="heavy">20% COMMISSION</h3>
                    <img className="commission-path-img" src={leader} alt="man and woman talking"/>
                    <h3> <FaCaretRight className="accent"/> Build a team by helping your referrals bring more users and get a 20% cut everytime someone in your team buys a package.</h3>
                </div>
            </div>

            <div className="matrix_title text-center mt-5">
                <h2 className="heading-sub-title">What to promote</h2>
                <div></div>
            </div>
        </div>
    )
}

export default Matrix
