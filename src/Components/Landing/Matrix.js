import React from 'react'
import hero from '../../assets/img/hero tron for everyone.png'
import leader from '../../assets/img/leader tron for everyone.png'
import { FaCaretRight } from "react-icons/fa";
function Matrix(props) {
    let lang = props.lang
    return (
        <div className="container mt-5" id="matrix">
            <div className="matrix_title text-center">
                <h1 className="heading-sub-title"> 
               
                    <span className="accent"><i>{lang === 'English'? "Choose":"选择"}</i></span> {lang === 'English'? "your own commission path":"你自己的佣金途径"}
                </h1>
                <p className="">
                    {lang === 'English' ? 
                    "Earn as much as +$9,000 in TRX for every referral on the highest package" 
                    : 
                    "每推荐一个最高套餐，就可赚取高达+9,000美元的TRX奖金"}
                </p>
                <p><i>
                    {lang === 'English'?
                    "All commissions are paid in TRX"
                    :
                    "所有的佣金都以TRX支付"
                    }
                </i></p>
            </div>
            <div className="matrix_boxes mt-5 mb-5">
                <div className="text-center p-50 col-md-5 d-flex justify-content-start bg-gray box-radius align-items-center commission-path">
                    <h2 className="">
                    {lang === 'English' ? 
                    "Direct" 
                    : 
                    "直接"}
                    </h2>
                    <h2 className="heavy">
                    {lang === 'English' ? 
                    "100% COMMISSION" 
                    : 
                    "100%的佣金"}
                    </h2>
                    <img className="commission-path-img" src={hero} alt="man holding his phone"/>
                    <p><FaCaretRight className="accent"/>
                    {lang === 'English' ? 
                    "Invite your friends and get paid from 100TRX to 204,800TRX when they sign up and upgrade their accounts." 
                    : 
                    "邀请你的朋友，当他们注册和升级他们的账户时，可以得到从100TRX到204,800TRX的报酬。"}
                    </p>
                </div>
                <div className="text-center p-50 col-md-5 d-flex justify-content-start bg-gray box-radius align-items-center commission-path">
                    <h2 className="">
                    {lang === 'English' ? 
                    "Team" 
                    : 
                    "团队"}
                    </h2>
                    <h2 className="heavy">
                    {lang === 'English' ? 
                    "20% COMMISSION" 
                    : 
                    "20%的佣金"}
                    </h2>
                    <img className="commission-path-img" src={leader} alt="man and woman talking"/>
                    <p> <FaCaretRight className="accent"/> 
                    {lang === 'English' ? 
                    "Build a team by helping your referrals bring more users and get a 20% cut everytime someone in your team buys a package." 
                    : 
                    "通过帮助你的推荐人带来更多的用户来建立一个团队，并且在你的团队中有人购买套餐时，你可以得到20%的分成。"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Matrix
