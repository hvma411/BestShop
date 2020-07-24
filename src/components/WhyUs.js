import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const WhyUsSection = () => {
    return (
        <section className="why-us--section">
            <h3>The most popular sales platform in country</h3>
            <div className="all-icons--box">
              <div className="icon--box">
                <div className="icon1">
                  <div className="icon-element1"></div>
                </div>
                <h4>100000+</h4>
                <p>daily entreis</p>
              </div>
              <div className="icon--box">
                <div className="icon2">
                  <div className="icon-element2"></div>
                </div>
                <h4>2000000+</h4>
                <p>seen products every day</p>
              </div>
              <div className="icon--box">
                <div className="icon3">
                  <div className="icon-element3"></div>
                </div>
                <h4>10000+</h4>
                <p>added posts daily</p>
              </div>
            </div>
        </section>
    )
}

export default WhyUsSection