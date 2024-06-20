import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/nav/Header';


function App({routes}) {

  return (
    <Login/>
  );
}

export default App;
