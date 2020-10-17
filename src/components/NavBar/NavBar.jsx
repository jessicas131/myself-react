import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
        <div>
          <span className='NavBar-welcome'>Hey There, {props.user.name}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to ='/add' className= 'NavBar-link'>Add an Item</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to ='/' className= 'NavBar-link'>Current Inventory</Link>
        </div>
        :
        <div>
          <Link to='/login' className='NavBar-link'>LOG IN</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
          </div>;
    return (
        <div className='NavBar'>
            {nav}
            
        </div>
    );
};

export default NavBar;