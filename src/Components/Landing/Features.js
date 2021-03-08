import React from 'react'
import { FaLink, FaMobileAlt, FaRegMoneyBillAlt, FaAngleRight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

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
        <div className="container-fluid bg-gray">
            <div className="container text-center" id="features">
            <h2 className="whitext heading-sub-title mt-5">
                {lang === 'English' ? "Heading is placed here" : "Heading is placed here"}
            </h2>
            
            <p id="subtitle">
                {lang === 'English' ?
                    "Subtitle is placed here"
                    : 
                    "Subtitle is placed here"
                }
            </p>
            <div className="features_wrap mt-5">
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <FaLink className="feature-icon"/>
                    <h3><span className="accent">1.</span> {lang === 'English'? "Get your link": "Obten tu link"}</h3>
                    <p>{lang === 'English' ? 
                    "Register to get your unique affiliate link and access to tons of marketing material."
                    :
                    "Registrate para obtener tu link de afiliado único y herramientas promocionales."
                    }
                    </p>
                </div>
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <FaAngleRight/>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <FaMobileAlt className="feature-icon" />
                    <h3><span className="accent">2.</span> {lang === 'English'? "Promote":"Promueve"}</h3>
                    <p>
                        {lang === 'English' ? 
                        "Invite your friends and contacts by sharing your unique link on social media."
                        :
                        "Invita a tus contactos y amigos compartiendo tu link único en tus redes."
                        }
                        </p>
                </div>
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <FaAngleRight/>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <FaRegMoneyBillAlt className="feature-icon"/>
                    <h3><span className="accent">3.</span> {lang === 'English'? "Start Earning" : "Gana"}</h3>
                    <p>{lang === 'English' ? "Earn as soon as your affiliates sign up. Instant commissions." :
                    "Gana dinero cada vez que una persona complete su registro y mejore su cuenta."
                    }
                    </p>
                </div>
            </div>
            <div className="container d-flex justify-content-center mb-5 mt-4">
                <button className="btn btn-outline-success custombtn-2" onClick={() => navigateTo('/registration')}>
                            {lang === 'English' ? "Join Now" : "Unirme Ahora"}
                </button>
            </div>

        </div>
        </div>
    )
}

export default Features
