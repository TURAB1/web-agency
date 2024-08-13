import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import "../../styles/nav-bar.css";

function Header() {

  return (

    <div className='nav-bar'>

      <h3>MAGISTRAE</h3>
      <div className='nav-link'>
        <NavLink to="/home" className="nav-text-decoration">Home</NavLink>
        <NavLink to="/about-us" className="nav-text-decoration">About Us</NavLink>
        <NavLink to="/services" className="nav-text-decoration">Services</NavLink>
        <NavLink to="/contact-us" className="nav-text-decoration">Contact Us</NavLink>
      </div>

      <i className="ri-menu-line d-none" ></i>
    </div>

  )
}

export default Header