import Carrousel from "../components/Carrousel";
import Navbar from "../components/navigation/Navbar"; 
import Feedbacks from "../components/navigation/Clients"; 
import Landing from "../components/navigation/landing/LandingSection"; 
import Footer from "../components/navigation/Footer"
import background from "../assets/landing/image.png"

function Home() {
  return (
    <>
      <div className=" w-full h-full bg-creamhs">
          <Navbar/>
          <Landing/>
          <Carrousel/>
          <Feedbacks/>
          <Footer/> 
    </div>
    </>
    
  )
}

export default Home