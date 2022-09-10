import React from 'react'

import { useState } from 'react'

const AddCounty = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [exptype, setExptype] = useState('')
  const [ispaidout, setIspaidout] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a expenditure name');
      return;
    }else if (!amount){
      alert('Please enter the expenditure amount');
      return;
    }else if (!exptype){
      alert('Please select the  expenditure type');
      return;
    }

    onAdd({ name: name, amount: amount, exptype:exptype,ispaidout })

    setName('')
    setAmount('')
    setExptype('')
    setIspaidout(false)
  }

  return (
 
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>County Name</label>
        <input
          type='text'
          placeholder='Petty cash name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Expenditure Type</label>
     
     <select name='extype' type="select"   onChange={(e) => setExptype(e.target.value)} >
    <option  value=""> </option>
    <option  value="Office Expenditure">Office Expenditure</option>
    <option  value="Miscallenous">Miscallenous</option>
    </select>

      </div>
      <div className='form-control'>
        <label>Amount</label>
        <input
          type='text'
          placeholder='Petty cash amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

      </div>
   
      <input type='submit' value='Save Record' className='btn btn-block' />
    </form>
  )
}

export default AddCounty
