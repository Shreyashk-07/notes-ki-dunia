import { useRef } from "react";
import React from "react";
import "../styles/Navbar.css"
import {FaBars,FaTimes} from "react-icons/fa"
function Navbar() {
  const navRef =useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
    return (
      <header>
        <h3>Notes ki Dunia</h3>
        <nav className="nav-bar" ref={navRef}>
          <a href="#">Notes </a>
          <a href="#">About Us</a>
          <a href="#">Sign In</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
           <FaTimes/>
        </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars/>
        </button>
      </header>
    );
  }
  
  export default Navbar;