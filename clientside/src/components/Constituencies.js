import React from 'react'
import {Route} from 'react-router-dom'

const Constituencies = () => {
  return (
    <div className='about'>
      <h4>Kenya Constituencies</h4>
      <hr/>
      <Route
path='/constituencies'
exact
render={(props) => (
<>
 No constituency records found
</>
)}
/>
</div>
)
}

export default Constituencies
