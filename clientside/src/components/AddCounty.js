import React from 'react'

import { useState } from 'react'

const AddCounty = ({ onAdd }) => {
  const [county_name, setName] = useState('')
  const [county_code, setCode] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()

    if (!county_name) {
      alert('County code missing!');
      return;
    }else if (!county_code){
      alert('County name missing ');
      return;
    }

    onAdd({ county_name: county_name, county_code: county_code })
    setName('')
    setCode('')
  }

  return (
 
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>County Code</label>
        <input
          type='number' maxLength={3}
          placeholder='County code'
          value={county_code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>County Name </label>
        <input
          type='text'
          placeholder='County name'
          value={county_name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
        />
      </div>
      <input type='submit' value='Save Record' className='btn btn-block' />
    </form>
  )
}

export default AddCounty
