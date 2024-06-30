import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Feedback from './pages/Feedback';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin';
import OrderPage from './pages/OrderPage';
import appFirebase from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import MenuContextProvider from "./components/context/MenuContext";
import './styles.css';

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
    <MenuContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home correoUsuario={usuario ? usuario.email : null} />} />
            <Route exact path="/Menu" element={<Menu />} />
            <Route exact path="/login" element={usuario ? <Navigate to="/" replace /> : <Login />} />
            <Route exact path="/register" element={usuario ? <Navigate to="/" replace /> : <Register />} />
            <Route exact path="/LoginAdmin" element={usuario ? <Navigate to="/" replace /> : <LoginAdmin />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </MenuContextProvider>
  );
}

export default App;
