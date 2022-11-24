import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import NewUser from './pages/newuser';

const App = function () {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new" element={<NewUser />} />
        </Routes>
      </Router>
    
    
    
    
    </>);


};

export default App;
