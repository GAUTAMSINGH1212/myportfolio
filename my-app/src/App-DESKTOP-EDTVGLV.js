import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Navbar from "./compo/header.js"; // ✅ correct path
import Home from "./components/Home.js"; // ✅ use ./ instead of ../
import About from "./components/About.js";
import Topics from "./components/Topics.js";
import JsDock from "./components/jsHomepage.js";
import Javascript_intro from "./components/basic/javascript_intro.js";
import VariablesPage from "./components/basic/VariablesPage.js";
import Javascript_data from "./components/basic/Javascript_data.js";  
import OperatorsPage from "./components/basic/OperatorsPage.js";  
import Loopspage from "./components/basic/Loopspage.js";  
import Functionpage from "./components/basic/Functionpage.js";  
import ConditionalsPage from "./components/basic/ConditionalsPage.js";  


function App() {
  return (
    <Router>
      <Navbar />
      <div className=""> {/* To give space fo