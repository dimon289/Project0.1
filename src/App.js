import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Super_tic_tac_toePage from "./pages/super-tic-tac-toe/tic-tac-toe"
import CatalogPage from './pages/CatalogPage';

import GamePage from './pages/GamePage';
import MinesweeperPage from './pages/minesweeper/MinesweeperPage.js'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/minesweeper" element={<MinesweeperPage />} />
          <Route path='/tic-tac-toe' element={<Super_tic_tac_toePage/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
