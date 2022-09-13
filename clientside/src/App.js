import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer'
import About from './components/About'
import Counties from './components/Counties'
import AddCounty from './components/AddCounty'
import Constituencies from './components/Constituencies'
export default function App() {
  const [showAddCounty, setShowAddCounty] = useState(false)
//   const [showAddConst, setShowAddConst] = useState(true)

    const [counties, setCounties] = useState([])

  useEffect(() => {
      const getCounties = async () => {
          const countiesFromServer = await fetchCounties()
          setCounties(countiesFromServer)
      }
      getCounties()
  }, [])

      // Fetch Counties records 
      const fetchCounties = async () => {
        const res = await fetch('http://localhost:9292/counties')
        const data = await res.json()
        return data
    }

    // Add county record
    const addCounty = async (county) => {
      const res = await fetch('http://localhost:9292/counties', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(county),
      })
      const data = await res.json()
      setCounties([...counties, data])
  }
    // Delete County record
 
    const deleteCounty = async (id) => {
      const res = await fetch(`http://localhost:9292/counties/${id}`, {
          method: 'DELETE',
      })
      //We should control the response status to decide if we will change the state or not.
      res.status === 200
          ? setCounties(counties.filter((county) => county.id !== id))
          : alert('Error Deleting This petty cash record')
  }

 return (
  <Router>
  <div className='container'>
  <Header  onAdd={() => setShowAddCounty(!showAddCounty)} showAdd={showAddCounty}
   />
  <Route
path='/'
exact
render={(props) => (
<>
    {showAddCounty && <AddCounty onAdd={addCounty}/>}
    {counties.length > 0 ? (
     <Counties
        counties={counties}
        onDelete={deleteCounty} />
    ) : (
        'No county records'
    )}
</>
)}
/>

<Route path='/about' component={About}/>
<Route path='/constituencies' component={Constituencies}/>

</div>
</Router>
);
}
