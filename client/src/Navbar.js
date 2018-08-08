import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/goals'>Goals</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/calendar'>Calendar</Link></li>
    </ul>
  )
}




export default Navbar;
