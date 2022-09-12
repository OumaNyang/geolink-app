import React from 'react'
import { FaTimes, FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { default as NumberFormat } from 'react-number-format';

const County = ({ county, onDelete, onToggle }) => {
  return (
<tr>
<td>{county.county_code}</td>
<td>{county.county_name}</td>
<td>

<Link to={`/constituencies/${county.county_code}`}>
<button type="button" className={"btn-view "}>
<FaMapMarker  style={{ color: 'white', cursor: 'pointer' }}/>
  View
</button>
</Link>
 </td>
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
