import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Inicio from './pages/Inicio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  );
}

export default App;
