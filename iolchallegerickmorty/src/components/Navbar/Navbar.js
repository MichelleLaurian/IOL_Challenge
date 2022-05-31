import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';


const Navbar = ()=> {
  return(
    <nav className="navbar navbar-expand-lg navbar__container">
 <div className="container">
      <Link 
      to='/' 
      className="navbar-brand nav__bartittle">
      IOL CHALLENGE
      </Link>
      <style>
        {`
        button[aria-expanded='false'] > .close{
          display:none;
        }
        button[aria-expanded='true'] > .open{
          display:none;
        }
        `}
        </style>
      <button 
      className='navbar-toggler' 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
       
        <i className="fas fa-bars open"></i>
        <i className="fas fa-times close" ></i>
      </button>
      <div className="collapse navbar-collapse nav-link" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <NavLink to='/' className="nav-link" activeClassName='active'>Home</NavLink>
          <NavLink  to="/location" className="nav-link" activeClassName='active'>Ubicación</NavLink>
          
          
        </div>
      </div>
      </div>
  </nav>
  )
}

export default Navbar; 