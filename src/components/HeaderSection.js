import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const HeaderSection = () => {
    return (
        <>
            <header>
                <div className="header-bar">
                    <div className="logo-nav--section container">
                        <div className="logo--box">
                            <div className="logo">BestShop</div>
                        </div>
                        <nav className="nav--box">
                            <ul>
                                <li>WHY US?</li>
                                <li>BENEFITS</li>
                                <li>PRICES</li>
                                <li>CONTACT</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="main--section">
                    <div className="main-info--box">
                        <h1>Sell more!</h1>
                        <h3>Open shop on our platform and increase your sales</h3>
                        <button>Open your shop</button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default HeaderSection