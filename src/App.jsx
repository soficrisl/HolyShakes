import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Feedback from "./pages/Feedback";
import Menu from "./pages/Menu";
import PendingOrders from "./pages/PendingOrders";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import appFirebase from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./styles.css"
import LoginAdmin from "./pages/LoginAdmin"
import Dashboard from "./pages/Dashboard"
import CompletedOrders from "./pages/CompletedOrders";


const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home correoUsuario={usuario ? usuario.email : null}/>} />
          {/* <Route exact path="/menu" element={<Menu />} /> */}
          <Route exact path="/login" element={usuario ? <Navigate to="/" replace />: <Login />} />
          <Route exact path="/register" element={usuario ? <Navigate to="/" replace />: <Register />} />
          <Route exact path="/LoginAdmin" element={usuario ? <Navigate to="/" replace />: <LoginAdmin/>} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/pendingorders" element={<PendingOrders/>}/>
          <Route exact path="/completedorders" element={<CompletedOrders/>}/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
