import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './index'; // Assuming index.js is rendered here as Home

function Navigation() {
  return (
    <Routes>
      <div className="Navigation">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Routes>
  );
}

export default Navigation;