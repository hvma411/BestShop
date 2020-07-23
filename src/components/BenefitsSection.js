import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const BenefitsSection = () => {
    return (
        <section className="benefits--section">
            <div className="benefits--position container">
                <div className="benefit--box">
                    <div className="text">
                        <h3>Be always first</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do euismod temport incididunt ut labore et dolore magna aliqua. Ut enimr ad minim veniam.</p>
                        <div className="line1"></div>
                    </div>
                    <div className="image1"></div>
                    <div className="decoration1"></div>
                </div>
                <div className="benefit--box">
                    <div className="image2"></div>
                    <div className="decoration2"></div>
                    <div className="text">
                        <h3>Your shop is where you are!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua. Ut enimr ad minim veniam.</p>
                        <div className="line2"></div>
                    </div>
                </div>
                <div className="benefit--box last-row--box">
                    <div className="text last-row">
                        <h3>Increase recognition your brand!</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua. Ut enimr ad minim veniam.</p>
                        <div className="line3"></div>
                    </div>
                    <div className="image3">
                        <div className="main-image"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;