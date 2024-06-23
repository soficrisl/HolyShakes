import Footer from "../components/navigation/Footer"
import Mainlogin from "../components/navigation/Mainlogin"
import Navbar from "../components/navigation/Navbar"
import image from "../assets/landing/image.png"

function Login() {
  return (
    <div className=" w-full h-full bg-cover" style ={{backgroundImage: `url('${image}')`}}>
    <Navbar />
    <Mainlogin /> 
    <Footer/>
    </div>
  )
}

export default Login