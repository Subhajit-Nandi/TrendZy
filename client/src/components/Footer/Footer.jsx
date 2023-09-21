import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Trendzy.com, Inc. is an Indian multinational technology company focusing
                        on e-commerce, cloud computing, online advertising, digital streaming, and
                        artificial intelligence
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Trendzy is revolutionizing the way we all shop in India.Trendzy houses everything
                        you can possibly imagine - in-vogue fashion staples like shoes,
                        clothing and lifestyle accessories;
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">TrendZy</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;