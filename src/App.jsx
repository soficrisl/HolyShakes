import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Register from "./pages/Register"; 


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
        </Router>
    </div>

  );
}

export default App;
