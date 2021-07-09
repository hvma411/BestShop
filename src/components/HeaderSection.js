import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';
import { Link } from 'react-scroll'

const HeaderSection = () => {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleClick = () => {
        setIsMenuActive(!isMenuActive);
    }

    const linkClick = () => {
        setIsMenuActive(false);
    }

    return (
        <>
            <header>
                <div className="header-bar">
                    <div className="logo-nav--section container">
                        <div className="logo--box">
                            <div className="logo">BestShop</div>
                        </div>
                        <div onClick={handleClick} className={`hamburger-menu-wrapper ${isMenuActive ? "hamburger-active" : "hamburger-inActive"}`}>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-second-line"></div>
                        </div>
                        <nav className={`nav--box ${isMenuActive ? "menu-visible" : ""}`}>
                            <ul>
                                <Link to="home" onClick={linkClick} smooth="true" duration={1000}><li>HOME</li></Link>
                                <Link to="why-us" onClick={linkClick} smooth="true" duration={1000}><li>WHY US?</li></Link>
                                <Link to="benefits" onClick={linkClick} smooth="true" duration={1000}><li>BENEFITS</li></Link>
                                <Link to="prices" onClick={linkClick} smooth="true" duration={1000}><li>PRICES</li></Link>
                                <Link to="footer" onClick={linkClick} smooth="true" duration={1000}><li>CONTACT</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="main--section" id="home">
                <div className="main-info--box">
                    <h1>Sell More!</h1>
                    <h3>Open shop on our platform and increase your sales</h3>
                    <button>Open your shop</button>
                </div>
            </section>
        </>
    );
};

export default HeaderSection