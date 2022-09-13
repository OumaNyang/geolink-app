import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Constituency = ({ constituency, onDelete }) => {
  return (
<tr>
<td>{constituency.constituency_code}</td>
<td>{constituency.constituency_name}</td>
<td>{constituency.county_code}</td>
<td>
<button   className="btn-delete" onClick={() => {if(window.confirm(`Delete ${constituency.constituency_name} constituency from records?`)){
onDelete(constituency.id)
};}}>
<FaTimes  style={{ color: 'white', cursor: 'pointer' }}/>  Delete</button>
</td>
</tr>
)
}
export default Constituency
