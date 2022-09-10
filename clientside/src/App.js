import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer'
import About from './components/About'
import Constituencies from './components/Constituencies'


export default function App() {
 return (
    <Router>
  <div className='container'>
  <Header></Header>
  <Route path='/about' component={About}/>
  <Route path='/constituencies' component={Constituencies}/>
  </div>
  </Router>
  );
}
