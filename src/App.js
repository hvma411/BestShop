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
import WhyUs from './components/WhyUs';


const App = () => {
    return (
        <HeaderSection />

    );
};

ReactDOM.render(
    <App />, document.getElementById("app")
);