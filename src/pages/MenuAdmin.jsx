import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"
import FoodDisplayAdmin from "../components/fooddisplay-admin/FoodDisplay"
import ExploreMenuAdmin from "../components/exploremenu-admin/ExploreMenu"
// eslint-disable-next-line no-unused-vars
import SearchBar from '../components/searchbar/SearchBar'
import { useState } from "react"
import NavbarAdmin from "../components/navigation/NavbarAdmin"

function Menu() {

  const [category, setCategory] = useState("All");

  return (
    <>
      <div className=" w-full h-full bg-gradient-circle">
        <NavbarAdmin/>
        <ExploreMenuAdmin category={category} setCategory={setCategory}/>
        <FoodDisplayAdmin category={category}/>
        <Footer/>
      </div>
    </>
  )
}

export default Menu