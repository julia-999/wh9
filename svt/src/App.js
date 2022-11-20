import { Route, Routes, BrowserRouter, Redirect, Link } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import raw from './files/world-languages-simple.csv';
import WebSocket from './WebSocket.js'
import First from './First.js'
import Second from './Second.js'
import SecondBackup from './SecondBackup'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/today"/>
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/second" element={<Second/>}/>
        <Route path="/second2" element={<SecondBackup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
