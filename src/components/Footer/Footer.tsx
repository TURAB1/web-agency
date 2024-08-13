import React from 'react'
import "../../styles/footer.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
       <NavLink to="/home" className="nav-text-decoration">Home</NavLink>
    </div>
  )
}

export default Footer