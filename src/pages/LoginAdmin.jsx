import { useNavigate } from "react-router-dom";
import Footer from "../components/navigation/Footer"
import MainLoginAd from "../components/navigation/MainloginAdmin"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"
import app_firebase from "../credentials";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app_firebase);
  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        navigate("/");
      }
    });
  }, [auth])
  return (
    <div className=" w-full h-full bg-gradient-circle ">
    <Navbar />
    <MainLoginAd/> 
    <Footer/>
    </div>
  )
}

export default Login