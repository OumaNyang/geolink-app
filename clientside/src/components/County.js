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
            
          <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(county.id)}
        /></td>
        </tr>
  )
}
export default County
