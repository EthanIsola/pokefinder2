import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink className = "navlink" exact to="/">Home</NavLink>
      <NavLink className = "navlink" to="/login">Login</NavLink>
      <NavLink className = "navlink" to="/favs">Favorites</NavLink>
    </nav> 
  </div>)
}

export default NavBar;
