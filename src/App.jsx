import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingSection from './components/navigation/landing/LandingSection';
import Mainlogin from "./components/navigation/Mainlogin";
import Footer from "./components/navigation/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Home/>
        {/*<Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>*/}
        </div>
      </Router>

  );
}

export default App;
