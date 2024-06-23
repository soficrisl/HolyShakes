import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/menu" element={<Menu />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        </div>
      </Router>

  );
}

export default App;
