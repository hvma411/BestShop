import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const FooterSection = () => {
    return (
        <>
            <section className="footer--section" id="footer">
                <div className="contact--box container">
                    <div className="contact-details">
                        <h3>Any questions?</h3>
                        <p>Leave your email address or call us!</p>
                        <ul>
                            <li>info@bestshop.xyz</li>
                            <li>123 345 789</li>
                        </ul>
                    </div>
                    <form>
                        <label for="name">NAME</label>
                        <input type="text" id="name" />
                        <label for="email">EMAIL</label>
                        <input type="text" id="email" />
                        <div className="rules--box">
                            <input type="checkbox"/>
                            <p>I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament's and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive)</p>
                        </div>
                        <div className="button--box">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <div className="footer--box container">
                    <div className="title--box">
                        <h3>BestShop</h3>
                        <p>2020 BestShop LTD, All Rights Reserved</p>
                    </div>
                    <div className="social-media--box">
                        <span className="twitter"></span>
                        <span className="facebook"></span>
                    </div>
                </div>
            </footer>

        </>

    );
};

export default FooterSection