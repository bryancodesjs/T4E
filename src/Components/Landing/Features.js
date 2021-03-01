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
        <div className="container text-center mt-5 mb-5 shadow-bottom" id="features">
            <h2 className="whitext heading-sub-title">
                {lang === 'English' ? "Heading is placed here" : "Bienvenid@ a la comunidad"}
            </h2>
            
            <p id="subtitle">
                {lang === 'English' ?
                        "Subtitle is placed here"
                    : "XTRON es un contrato inteligente basado en el marketing híbrido. Este es un programa innovador y decentralizado que te brinda herramientas para generar dinero desde tu teléfono o PC."
                }
            </p>
            <div className="features_wrap mt-5">
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <FaLink className="feature-icon"/>
                    <h3>1. Get Your Link</h3>
                    <p>Register to get your unique affiliate link and access to tons of marketing material.</p>
                </div>
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <FaAngleRight/>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <FaMobileAlt className="feature-icon" />
                    <h3>2. Promote</h3>
                    <p>Invite your friends and contacts by sharing your unique link on social media.</p>
                </div>
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <FaAngleRight/>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <FaRegMoneyBillAlt className="feature-icon"/>
                    <h3>3. Start Earning</h3>
                    <p>Earn as soon as your affiliates sign up. Instant commissions.</p>
                </div>
            </div>
            <div className="container d-flex justify-content-center mb-5">
                <button className="btn btn-outline-success custombtn-2" onClick={() => navigateTo('/registration')}>
                            {lang === 'English' ? "Join Now" : "REGISTRO"}
                </button>
            </div>

        </div>
        
    )
}

export default Features
