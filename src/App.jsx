
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
import app_firebase from './credentials';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const auth = getAuth(app_firebase);
  const firestore = getFirestore(app_firebase);

  const initialOptions = {
    clientId: "AWQviUq0J_XMQHvb1s794P02FJ7JVbconqdyodWY-fNDsT20SRfs6MQFndXkijpl_GNRTVKJsxe0HLDv",
    currency: "USD",
    intent: "capture",
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        checkUserRole(user.uid); // Check user role on login/state change
      } else {
        setIsAdmin(false);
      }
    });

    return unsubscribe;
  }, []);

  const checkUserRole = async (uid) => {
    const userDocRef = doc(firestore, 'usuarios', uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists) {
      const userRole = userDocSnap.data().rol;
      setIsAdmin(userRole == "Admin"); // Check for specific roles or admin
      console.log(isAdmin)
      console.log("usuario", currentUser)
    } else {
      console.error('User document not found');
    }
  };

  return (
    <MenuContextProvider> {/* Envolver con MenuContextProvider */}
    <PayPalScriptProvider options={initialOptions}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home correoUsuario={currentUser ? currentUser.email : null} />} />
            <Route exact path="/Menu" element={<Menu />} />
            <Route exact path="/menuAdmin" element={isAdmin ? <MenuAdmin /> : <Navigate to="/" replace />} />
            <Route exact path="/login" element={!currentUser ? (<Login />) : (<Navigate to="/" replace />)} />
            <Route exact path="/register" element={!currentUser ? (<Register />) : (<Navigate to="/" replace />)} />
            <Route exact path="/LoginAdmin" element={!currentUser ? (<LoginAdmin />) : (<Navigate to="/" replace />)} />
            <Route exact path="/profile" element={<UserProfile />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/order" element={<OrderPage />} />
            <Route exact path="/dashboard" element={isAdmin ? <Dashboard /> : <Navigate to="/" replace />} />
            <Route exact path="/pendingorders" element={isAdmin ? <PendingOrders /> : <Navigate to="/" replace />}/>
            <Route exact path="/completedorders" element={isAdmin ? <CompletedOrders /> : <Navigate to="/" replace />}/>
            <Route exact path="/editProfile" element={<EditProfile/>}/>
            <Route exact path="/conocenos" element={<Conocenos/>}/>
          </Routes>
        </div>
      </Router>
      </PayPalScriptProvider>
    </MenuContextProvider>

  );
}

export default App;
