import React from 'react'
import { FaTimes,FaGlobe } from 'react-icons/fa'
// import { default as NumberFormat } from 'react-number-format';

const County = ({ county, onDelete, onToggle }) => {
  return (
<tr>
<td>{county.county_code}</td>
<td>{county.county_name}</td>
<td>
<FaGlobe
style={{ color: 'blue', cursor: 'pointer' }}
onClick={() => onDelete(county.id)}
/>  </td>
<td>
<button   className="btn-delete" onClick={() => {if(window.confirm(`Delete ${county.county_name} 
county from records? Note that all constituencies will also be deleted!`)){
onDelete(county.id)
};}}>
<FaTimes  style={{ color: 'white', cursor: 'pointer' }}/>  Delete</button>
</td>
</tr>
)
}
export default County
