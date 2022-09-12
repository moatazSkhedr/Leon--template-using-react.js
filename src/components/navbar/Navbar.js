import React from 'react';
import './navbar.css'
import NavList from './NavList';
import { useState } from 'react';
function Navbar() {
    const [isActive , setActive] = useState(false);
    const handelChange = ()=>{
        setActive(!isActive);
    }

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src="../../../images/logo.png"/>
            </div>
            <div className='list' onClick={handelChange}>
            <i class="bi bi-list"></i>
            <div className={isActive ? "menu" : "hide"}>
            <NavList />
            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Navbar
