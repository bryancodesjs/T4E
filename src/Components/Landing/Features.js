import React from 'react'
import { FaAngleRight, FaSignInAlt } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import join from './img/join.png';
import share from './img/share.png';
import earn from './img/earn.png';

function Features(props) {
    const navigateTo = (url) => {
        history.push({
            pathname: url,
            state: lang
        })
    }
    const history = useHistory();
    let lang = props.lang
    return (
        <div className="container-fluid bg-gray slide-in-bottom">
            <div className="container text-center" id="features">
                <h1 className="heading-sub-title mt-5"> 
                    <span className="accent"><i>{lang === 'English'? "Monetize":"货币化"}</i></span> {lang === 'English'? "your social media":"你的社交媒体"}
                </h1>
            
                <div className="features_wrap mt-5">
                    <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                        <img src={join} alt="join tron alliance"/>
                        <h2 className="mt-3"><strong>{lang === 'English'? "Join": "加盟"}</strong></h2>
                        <p>{lang === 'English' ? 
                        "Join millions of users worldwide who are earning money everyday using this proven business model."
                        :
                        "加入全球数以百万计的用户，他们每天都在使用这种成熟的商业模式挣钱。"
                        }
                        </p>
                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                        <FaAngleRight/>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                        <img src={share} alt="share tron alliance"/>
                        <h2 className="mt-3"><strong>{lang === 'English'? "Share":"分享"}</strong></h2>
                        <p>
                            {lang === 'English' ? 
                            "Share our products with your friends and audience. Our tools make it simple to share our products."
                            :
                            "与你的朋友和观众分享我们的产品。我们的工具使分享我们的产品变得简单。"
                            }
                            </p>
                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                        <FaAngleRight/>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                        <img src={earn} alt="earn trx money with tron alliance"/>
                        <h2 className="mt-3"><strong>{lang === 'English'? "Earn" : "赚取"}</strong></h2>
                        <p>{lang === 'English' ? "Earn 100% commission for every direct purchase and 20% commission per team purchase." :
                        "每次直接购买赚取100%的佣金，每次团队购买赚取20%的佣金。"
                        }
                        </p>
                    </div>
                </div>
                <div className="container d-flex justify-content-center mb-5 mt-4">
                    <button className="btn btn-success custombtn mb-5" onClick={() => navigateTo('/registration')}>
                                {lang === 'English' ? "Join Now" : "现在加入"} <FaSignInAlt/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Features
