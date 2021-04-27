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
                    <div className="details-wrap slide-in-bottom">
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

                        <details>
                            <summary>Who runs Tron Alliance?</summary>
                            <p>
                            Tron Alliance is a smart contract and as such, after being deployed on the 
                            Tron blockchain it operates autonomously without human intervention. 
                            </p>
                        </details>

                        <details>
                            <summary>How am I paid?</summary>
                            <p>
                            All transactions are done using TRX, therefore you receive all your commissions in TRX.
                            </p>
                        </details>

                        <details>
                            <summary>How do I withdraw my commissions?</summary>
                            <p>
                            Since this is a smart contract, all transactions are performed instantly and automatically. 
                            As you refer new users, the contract transfers all your commissions to the same wallet address 
                            you used during registration.
                            </p>
                        </details>

                        <details>
                            <summary>Can I change my TRX wallet address?</summary>
                            <p>
                            Registrations on a smart contract are absolute and unalterable. Once you register using 
                            ‘x’ wallet address that address is linked to your account forever.
                            </p>
                        </details>

                        <details>
                            <summary>I see all accounts are public and visible, is my account vulnerable?</summary>
                            <p>
                            The Tron Blockchain is open, transparent and public, that’s why all accounts and transactions 
                            are visible to anyone. When you login to an account using an ID, you are able to see how much 
                            TRX that account has earned and how many users that account has referred, but only the wallet 
                            address owner of that account can make changes (like upgrading a license) or benefit from that 
                            account.
                            </p>
                        </details>

                        <details>
                            <summary>Are there any transaction fees?</summary>
                            <p>
                            Yes, there’s a 10% maintenance fee on top of every purchase. This helps cover development and 
                            operational costs which keep the platform online. The maintenance fee is distributed the following way:
                            </p>
                            <ul>
                                <li>70% frozen for TRX energy generation to reduce transaction costs for all users. Without this, 
                                    users would be forced to burn 30-90 TRX for every transaction.
                                </li>

                                <li>
                                20% hosting and maintenance. An autonomous smart contract consumes a substantial amount of computing 
                                power which can easily surpass 5-figures in hosting/maintenance costs every month.
                                </li>

                                <li>
                                10% development costs. Launching, scaling and maintaining a platform of this nature has only been 
                                possible with the invaluable help of more than 20 highly skilled and hardworking programmers and designers 
                                from around the world. This 10% cut helps us buy a cup of coffee and continue improving the platform everyday.   
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default faq