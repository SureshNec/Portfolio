import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className='NavBar'>
      <nav className='navbar navbar-expand-md bg-body-tertiary'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse d-flex  flex-row gap-5' id='navbarTogglerDemo01'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Portfolio'>Portfolio</NavLink>
          <NavLink to='/About'>About</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
