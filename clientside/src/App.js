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
  const [showAddBudget, setShowAddBudget] = useState(false)
  const [budgets, setBudgets] = useState([])

  useEffect(() => {
      const getBudgets = async () => {
          const budgetsFromServer = await fetchBudgets()
          setBudgets(budgetsFromServer)
      }
      getBudgets()
  }, [])

      // Fetch Petty cash records 
      const fetchBudgets = async () => {
        const res = await fetch('http://localhost:5000/budgets')
        const data = await res.json()

        return data
    }



 return (
    <Router>
  <div className='container'>
  <Header  onAdd={() => setShowAddBudget(!showAddBudget)} showAdd={showAddBudget}    />
  <Route path='/about' component={About}/>
  <Route path='/constituencies' component={Constituencies}/>
  </div>
  </Router>
  );
}
