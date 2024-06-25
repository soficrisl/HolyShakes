import Footer from "../components/navigation/Footer"
import MainLoginAd from "../components/navigation/MainloginAdmin"
import Navbar from "../components/navigation/Navbar"
import image from "../assets/landing/image.png"
import "../styles.css"

function Login() {
  return (
    <div className=" w-full h-full bg-gradient-circle ">
    <Navbar />
    <MainLoginAd/> 
    <Footer/>
    </div>
  )
}

export default Login