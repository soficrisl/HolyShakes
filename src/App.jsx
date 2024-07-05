
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
import UserProfile from './pages/userProfile';
import EditProfile from './pages/editProfile';
import Dashboard from './pages/Dashboard';
import PendingOrders from './pages/PendingOrders';
import CompletedOrders from './pages/CompletedOrders';
import MenuAdmin from './pages/MenuAdmin';
import appFirebase from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import MenuContextProvider from './components/context/MenuContext';
import Conocenos from "./pages/Conocenos"; 

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
            <Route exact path="/menuAdmin" element={<MenuAdmin />} />
            <Route exact path="/login" element={usuario ? <Navigate to="/" replace /> : <Login />} />
            <Route exact path="/register" element={usuario ? <Navigate to="/" replace /> : <Register />} />
            <Route exact path="/LoginAdmin" element={usuario ? <Navigate to="/" replace /> : <LoginAdmin />} />
            <Route exact path="/profile" element={<UserProfile />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/order" element={<OrderPage />} />
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/pendingorders" element={<PendingOrders/>}/>
            <Route exact path="/completedorders" element={<CompletedOrders/>}/>
            <Route exact path="/editProfile" element={<EditProfile/>}/>
            <Route exact path="/conocenos" element={<Conocenos/>}/>
          </Routes>
        </div>
      </Router>
    </MenuContextProvider>

  );
}

export default App;
