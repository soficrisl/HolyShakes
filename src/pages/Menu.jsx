// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"
import FoodDisplay from "../components/fooddisplay/FoodDisplay"
import ExploreMenu from "../components/exploremenu/ExploreMenu"
// eslint-disable-next-line no-unused-vars
import SearchBar from '../components/searchbar/SearchBar'
import RealizarPedido from '../components/realizarpedido/RealizarPedido'

import FoodDisplayAdmin from "../components/fooddisplay-admin/FoodDisplay"
import ExploreMenuAdmin from "../components/exploremenu-admin/ExploreMenu"

function Menu() {

  const [category, setCategory] = useState("All");

  return (
    <>
      <div className=" w-full h-full bg-gradient-circle">
        <Navbar/>

        <ExploreMenuAdmin category={category} setCategory={setCategory}/>
        <FoodDisplayAdmin category={category}/>
        <Footer/>
        
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <RealizarPedido/>
        <Footer/>

      </div>
    </>
  )
}

export default Menu