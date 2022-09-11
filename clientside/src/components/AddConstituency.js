import React from 'react'
import {useEffect, useState} from 'react'

const AddConstituency = ({onAdd}) => {
  const [constituency_name, setConstName] = useState('')
  const [county_code, setCountyCode] = useState('')
  const [constituency_code, setConstCode] = useState('')
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
  const onSubmit = (e) => {
    e.preventDefault()

    if (!constituency_code) {
      alert('constituency code missing!');
      return;
    }else if (!constituency_name){
      alert('constituency name missing ');
      return;
    }
    else if (!county_code){
      alert('Please select county');
      return;
    }

    onAdd({constituency_code: constituency_code,  constituency_name: constituency_name, county_code: county_code })
    setConstName('')
    setCountyCode('')
    setConstCode('')
  }

  return (
     <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>County</label>
        <select
          name={county_code}
          onChange={(e) => setCountyCode(e.target.value)}
        >
      <option value={""}  ></option>
      {counties.map((county, index) => (
      <option value={county.county_code}  >{county.county_name}</option>   ))}

        </select>
      </div>
      <div className='form-control'>
        <label>Constituency code</label>
        <input
          type='text'
          value={constituency_code} maxLength={3}
          onChange={(e) => setConstCode(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Consituency name </label>
        <input
          type='text'
          value={constituency_name}
          onChange={(e) => setConstName(e.target.value.toUpperCase())}
        />
      </div>
      <button type='submit'  className='btn-submit' >Save Record</button>
    </form>
  )
}

export default AddConstituency
