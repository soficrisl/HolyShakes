import AboutUs from "../components/navigation/AboutUs"
import Footer from "../components/navigation/Footer"
import Mainlogin from "../components/navigation/Mainlogin"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"

function Login() {
  return (
    <div className=" w-full h-full bg-gradient-circle ">
    <Navbar />
    <AboutUs />
    <Mainlogin /> 
    <Footer/>
    </div>
  )
}

export default Login