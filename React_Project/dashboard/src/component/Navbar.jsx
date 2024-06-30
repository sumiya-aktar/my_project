import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navber.css'
const Navbar = () => {
    return (
        
        <div className="wrapper">


        <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{backgroundColor:"red"}}>
        {/* Left navbar links */}
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Contact</a>
            </li>
        </ul>
        {/* Right navbar links */}

        </nav>
           <div>
             <img src="/../src/assets/chart.png" alt="" />
           </div>
        </div>
     
       
    );
};

export default Navbar;