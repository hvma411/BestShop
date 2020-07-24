import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import './scss/main.scss';

import HeaderSection from './components/HeaderSection';
import WhyUsSection from './components/WhyUs';
import BenefitsSection from './components/BenefitsSection';
import PricesSection from './components/PricesSection';


const App = () => {
    return (
        <>
            <HeaderSection />
            <WhyUsSection />
            <BenefitsSection />
            <PricesSection />
        </>
    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);