import React from 'react'
import {Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Constituency from './Constituency'
import AddConstituency from './AddConstituency'

const Constituencies = () => {
const [constituencies, setConstituencies] = useState([])
  useEffect(() => {
    const getConstituencies = async () => {
    const constituenciesFromServer = await fetchConstituencies()
    setConstituencies(constituenciesFromServer)
    }
    getConstituencies()
    // fetchConstByCounty(countycode)
}, [])

const [showAddConst, setShowAddConst] = useState(true)
// const [showFilteredConst, setShowFilteredConst] = useState(true)

const [countycode,setCountyCode] =useState('');

   // Fetch all Constituencies records 
      const fetchConstituencies = async () => {
        const res = await fetch('http://localhost:9292/constituencies')
        const data = await res.json()
        return data
    }
   // Fetch all Constituencies by county 
  //const county_code= 047

const filterByCounty = async (countycode) => {
const res = await fetch(`http://localhost:9292/county-constituencies/${countycode}`)
// setConstituencies([...constituencies, filteredConst]);
const data = await res.json()
return data
}

  // Add constituency record
  const addConstituency = async (constituency) => {
    const res = await fetch('http://localhost:9292/constituencies', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(constituency),
    })
    const data = await res.json()
    setConstituencies([...constituencies, data])
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

 <div className='form-control'>
        <label>Search By County </label>
        <select    name={countycode}
          onChange={handlechange}
    //  onChange={(e) => setCountyCode(e.target.value)&& filterByCounty(countycode)}
      >
      <option value={""}  > </option>
      <option value={"001"}  >Mombasa</option>
      <option value={"003"}  >Lamu</option>
      <option value={"047"}  >Nairobi</option>
      </select>
    </div>

 <Route path='/constituencies'
exact
render={(props) => (
<>
{showAddConst && <AddConstituency  onAdd={addConstituency} onAddConst={() => setShowAddConst(!showAddConst)} showAddConst={showAddConst} />}

{constituencies.length > 0 ? (

 <table>
  <thead>
    <tr>
  <th>Const. code </th>
  <th>Const. name</th>
  <th>County</th>
  <th>Action</th>
  </tr>
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
</div> )
}

export default Constituencies
