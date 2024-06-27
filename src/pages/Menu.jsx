import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"

function Menu() {
  return (
    <>
      <div className=" w-full h-full bg-gradient-circle">
        <Navbar/>
        <Footer/>
      </div>
    </>
  )
}

export default Menu