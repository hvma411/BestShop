import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Prices = () => {
    return (
        <section className="prices--section">
            <div className="prices--box container">
                <h3 className="prices--title">Pricing</h3>
                <div className="options--box">
                    <div className="option--box box1">
                        <h4>Basic</h4>
                        <h3 className="price1">$0</h3>
                        <ul>
                            <li>100 MB HDD</li>
                            <li>Subdomain</li>
                            <li>2 E-mails</li>
                            <li>Two years license</li>
                            <li>Full support</li>
                        </ul>
                        <button>Begin</button>
                    </div>
                    <div className="option--box bigger">
                        <h4>Professional</h4>
                        <h3 className="price2">$25</h3>
                        <h5>Limited offer</h5>
                        <ul>
                            <li>500 MB HDD</li>
                            <li>2 Subdomains</li>
                            <li>5 E-mails</li>
                            <li>One years license</li>
                            <li>Full support</li>
                        </ul>
                        <button>Begin</button>
                    </div>
                    <div className="option--box box3">
                        <h4>Premium</h4>
                        <h3 className="price3">$60</h3>
                        <h5>Limited offer</h5>
                        <ul>
                            <li>2 GB HDD</li>
                            <li>5 Subdomain</li>
                            <li>20 E-mails</li>
                            <li>Two years license</li>
                            <li>Full support</li>
                        </ul>
                        <button>Begin</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;