import React from 'react';
import { Route, Routes,useLocation } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Morena from './components/pages/invitations/mis15Morena';


function App() {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path='/invitaciones/Mis15Morena' element={<Morena/>} />
      </Routes>
  );
}

export default App;
