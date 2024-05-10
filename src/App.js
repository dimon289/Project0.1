import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import GamePage from './pages/GamePage';
import MinesweeperPage from './pages/minesweeper/MinesweeperPage'
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
