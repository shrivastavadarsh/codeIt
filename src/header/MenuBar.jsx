import React from "react";
import "./menubar.css"

const MenuBar = () => {
  
  
  return (
    <div className="navbar">

        <a href="#About">About</a>

        <div className="dropdown">
            <button className="dropbtn">File 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <a href="#">New File</a>
            <a href="#">Open File</a>
            <a href="#">Discard</a>
            <a href="#">Exit</a>
            
            </div>
        </div>

        <a href="#share">Share</a>
        <a href="#run">Run</a> 
        
        <div className="dropdown">
            <button className="dropbtn">Language 
            </button>
            <div className="dropdown-content">
            <a href="#">C</a>
            <a href="#">C++ 14</a>
            <a href="#">C++ 17</a>
            <a href="#">Python</a>
            <a href="#">Java</a>
            </div>

        </div>

        <a href="#sign-in" style={{float:"right"}}> SIGN IN </a>
        <a href="#sign-up" style={{float:"right"}}> SIGN UP </a>
</div>
  );
};

export default MenuBar;
