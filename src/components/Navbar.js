import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'; 

function Navbar() {
  return (
    <header>
      <div className='header_container'>
        <nav className='nav_panel'>
          <img src={logo} alt="Alternate text" className='logo'/>
          <ul className='nav_list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/game">Game</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
