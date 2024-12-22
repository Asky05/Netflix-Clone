import React from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
          
    </div>
  );
}

export default App;
