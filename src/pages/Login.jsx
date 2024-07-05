import { useNavigate } from "react-router-dom"
import AboutUs from "../components/navigation/AboutUs"
import Footer from "../components/navigation/Footer"
import Mainlogin from "../components/navigation/Mainlogin"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app_firebase from "../credentials"
import { useEffect } from "react"

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
    <Mainlogin /> 
    <Footer/>
    </div>
  )
}

export default Login