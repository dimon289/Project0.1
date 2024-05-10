
import React from 'react';
import './Catalog.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

function CatalogPage() {
  return <>
    <main> 
     <div className='first_block'>
      <div className='container_catalog'>
        <Link className = "game_block" to="/minesweeper">
        <p>Minesweeper</p>
        <img src={logo} alt="Alternate text" className='logo'/>
        </Link>
        <a href='dddd' className='game_block'>
        <p>Game 1</p>
        <img src={logo} alt="Alternate text" className='logo'/>
        
        </a>
        <a href='dddd' className='game_block'>
        <p>Game 1</p>
        <img src={logo} alt="Alternate text" className='logo'/>
        
        </a>
      </div>
      

     </div>
    </main>  
  </>
}

export default CatalogPage;
