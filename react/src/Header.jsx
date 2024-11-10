import React from 'react';
import './index.css'; // Assuming your styles are in index.css
import downloadImage from "./assets/downlaod/download.jpeg";

const Header = () => {
    return (
        <div className="header">
             <p className="top">SPICYTASTE</p>
            <div className="header-content">
                {/* Logo Link */}
                <a href="SpicytasteCorporate.html">
                    <img src={downloadImage} className="logo" alt="Logo" />
                </a>

                {/* Navigation Links */}
                <div className="header-nav">
                    <a href="SpicytasteCorporate.html">🏢 SPICYTASTE CORPORATE</a>
                    <a href="search.html">🔍 SEARCH</a>
                    <a href="offers.html">🎉 OFFERS</a>
                    <a href="help.html">❓ HELP</a>
                    <a href="signin.html">🔑 SIGN IN</a>
                    <a href="cart.html">🛒 CART</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
