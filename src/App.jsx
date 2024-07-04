import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Feedback from './pages/Feedback';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin';
import OrderPage from './pages/OrderPage';
import Perfil from './pages/Perfil';
import appFirebase from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import MenuContextProvider from './components/context/MenuContext';
import './styles.css';


function App() {
  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {
    const auth = getAuth(appFirebase);
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
  }, [])
  

  return (
    <MenuContextProvider> {/* Envolver con MenuContextProvider */}
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home correoUsuario={usuario ? usuario.email : null} />} />
            <Route exact path="/Menu" element={<Menu />} />
            <Route exact path="/login" element={usuario ? <Navigate to="/" replace /> : <Login />} />
            <Route exact path="/register" element={usuario ? <Navigate to="/" replace /> : <Register />} />
            <Route exact path="/LoginAdmin" element={usuario ? <Navigate to="/" replace /> : <LoginAdmin />} />
            <Route exact path="/perfil" element={<Perfil />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </MenuContextProvider>
  );
}

export default App;
