/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './FoodDisplay.css'
import {MenuContext} from './context/MenuContext'

const FoodDisplay = () => {

    const {food_list} = useContext(MenuContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes</h2>
    </div>
  )
}

export default FoodDisplay