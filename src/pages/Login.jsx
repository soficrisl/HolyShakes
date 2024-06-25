import Footer from "../components/navigation/Footer"
import Mainlogin from "../components/navigation/Mainlogin"
import Navbar from "../components/navigation/Navbar"
import image from "../assets/landing/image.png"
import "../styles.css"
import AboutUs from "../components/navigation/AboutUs"

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