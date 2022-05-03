import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink className = "navlink" exact to="/">Home</NavLink>
    </nav> 
  </div>)
}

export default NavBar;
