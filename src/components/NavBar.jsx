import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <h1 className='title'>Assignment</h1>
        <ul className='navbar'> 
        <li><NavLink to="/" className="link">Sum</NavLink></li> 
            <li><NavLink to="/appendString" className="link">Append String</NavLink></li>
            <li><NavLink to="/countWords" className="link">Count Words</NavLink></li>
        </ul>
    </>
  )
}

export default NavBar