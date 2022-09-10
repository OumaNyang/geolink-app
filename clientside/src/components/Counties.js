import React from 'react'
import County from './County.js'

const Counties = ({ counties, onDelete, onToggle }) => {
  return (
   <table>
   <thead>
            <th>County code </th>
            <th>County Name</th>
            <th>Constituencies</th>
            <th>Action</th>
     </thead>
     <tbody>
      {counties.map((county, index) => (
        <County key={index} county={county} onDelete={onDelete} onToggle={onToggle} />
      ))}
       </tbody>
       </table>
  )
}
export default Counties
