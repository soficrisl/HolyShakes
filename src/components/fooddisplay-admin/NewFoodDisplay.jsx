/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './FoodDisplay.css';
import PropTypes from 'prop-types';
import { MenuContext } from '../context/Menucontext';
import FoodItem from '../fooditem-admin/FoodItem';
import FoodItemVacio from '../fooditem-admin/FoodItemVacio';
import edit from "../../assets/edit.png";

const NewFoodDisplay = () => {
  const { food_list } = useContext(MenuContext);

  return (
    <div className='food-display' id='food-display'>
      <h3>Añadir nueva categoría      +___</h3>
      <h2 className="food-display category-heading">
    +____ <h1> <img src={edit} alt="Edit Icon" className="category-image" /></h1>
</h2>
      <FoodItemVacio/>
      <h3>Añadir nuevo producto +____</h3>
    </div>
  );
};

export default NewFoodDisplay;