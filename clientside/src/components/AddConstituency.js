import React from 'react'

import { useState } from 'react'

const AddConstituency = ({ onAdd}) => {
  const [constituency_name, setConstName] = useState('')
  const [county_code, setCountyCode] = useState('')
  const [constituency_code, setConstCode] = useState('')

  
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

        {/* <select     onChange={(e) => setCode(e.target.value)}>
    <option value={county_code}  >Test</option>
    <option value={county_code}  >Test</option>

    
        </select> */}
        <input
          type='text' maxLength={3}
          value={county_code}
          onChange={(e) => setCountyCode(e.target.value)}
        />
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
      <button type='submit'  className='btn-submit' >Add Record</button>
    </form>
  )
}

export default AddConstituency
