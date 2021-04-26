import React from 'react'
import MyNav from '../BackOffice/Nav'
import { FaChevronRight } from "react-icons/fa";

function faq() {
    return(
        <div>
            <MyNav />
            <div className="d-flex w-100 justify-content-center bg-accent">
                <h1 className="text-center whitext mt-5 mb-5"><strong>Frequently Asked Questions</strong></h1>
            </div>
            <div className="container">
                <div className="mt-5">
                    <div className="details-wrap">
                        <details>
                            <summary>What is Tron Alliance?</summary>
                            <p>
                                Tron Alliance is an affiliate platform which helps you monetize your 
                                social media accounts by providing a highly profitable product which you can share 
                                and earn limitless commissions from.
                            </p>
                        </details>

                        <details>
                            <summary>What is affiliate marketing?</summary>
                            <p>
                                Pioneered by Amazon.com since 1996, affiliate marketing is a marketing method which has
                                helped millions of people earn more money than any other business type in history. It consists
                                of an online platform paying you for sharing content and earn attractive commissions anytime a new
                                user interacts with the content you shared.  
                                The affiliate marketing industry is so huge it is expected to generate 8.2 billion dollars by 2022.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default faq