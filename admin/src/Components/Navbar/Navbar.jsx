import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoname.jpg';
import profile_icon from '../../assets/profile2.png';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-title'>
      <img src={logo} className='nav-logo' alt="" />
      </div>
      <img src={profile_icon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
