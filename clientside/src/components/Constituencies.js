import React from 'react'
import {Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Constituency from './Constituency.js'

const Constituencies = () => {
const [constituencies, setConstituencies] = useState([])

  useEffect(() => {
    const getConstituencies = async () => {
        const constituenciesFromServer = await fetchConstituencies()
        setConstituencies(constituenciesFromServer)
    }
    getConstituencies()
}, [])

    // Fetch Constituencies records 
    const fetchConstituencies = async () => {
      const res = await fetch('http://localhost:9292/constituencies')
      const data = await res.json()
      return data
  }

      // Delete Constituency record
     const deleteConstituency = async (id) => {
      const res = await fetch(`http://localhost:9292/constituencies/${id}`, {
          method: 'DELETE',
      })
      //We should control the response status to decide if we will change the state or not.
      res.status === 200
          ? setConstituencies(constituencies.filter((constituency) => constituency.id !== id))
          : alert('Error deleting consituency record')
  }


  return (
    <div className='about'>
      <h4>Kenya Constituencies</h4>
      <hr/>
      <Route
path='/constituencies'
exact
render={(props) => (
<>
{constituencies.length > 0 ? (
 
 <table>
   <thead>
            <th>Const. code </th>
            <th>Const. name</th>
            <th>County</th>
            <th>Action</th>
     </thead>
     <tbody>
     {constituencies.map((constituency, index) => (
        <Constituency key={index} constituency={constituency}  onDelete={deleteConstituency} />
      ))}
       </tbody>
       </table>

) : (
  'No constituency records found'
)}





</>
)}
/>
</div>
)
}

export default Constituencies
