// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import "../styles.css"
import FoodDisplay from "../components/fooddisplay/FoodDisplay"
import ExploreMenu from "../components/exploremenu/ExploreMenu"

function Menu() {

  const [category, setCategory] = useState("All");

  return (
    <>
      <div className=" w-full h-full bg-gradient-circle">
        <Navbar/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Footer/>
      </div>
    </>
  )
}

export default Menu