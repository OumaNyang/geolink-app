import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
  import Button from './Button'
import { Link } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd, showAbout }) => {
 const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      <div className='navbuttons'>
      <Link to='/'>
          <button type="button" className={"btn btn-secondary"}>
            Home
          </button>
      </Link>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add Petty Cash'}
          onClick={onAdd}
        />
      )}


   <Link className='aboutlink' to='/constituencies'>Constituencies</Link>
   <Link className='aboutlink' to='/about'>About</Link>
    </div>
      
    </header>
   
  )
}

Header.defaultProps = {
  title: 'Geolink Application',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header