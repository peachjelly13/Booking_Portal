import './Navbar.css'

import React from 'react'

export const Navbar = () => {
  return (
    <div className='Navbar'> 
        <div className="navContainer">
            <span className='logo'>BookIt</span>
            <div className="navItems">
                <button className='Navbutton'>Login</button>
                <button className='Navbutton'>Register</button>
            </div>
        </div>
    </div>
  )
}
