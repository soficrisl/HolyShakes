/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './FoodDisplay.css';
import PropTypes from 'prop-types';
import { MenuContext } from '../context/MenuContext';
import FoodItem from '../fooditem-admin/FoodItem';
import FoodItemVacio from '../fooditem-admin/FoodItemVacio';
import edit from "../../assets/edit.png";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(MenuContext);

  return (
    <div className='food-display' id='food-display'>
      <h3>Añadir nueva categoría      +___</h3>
      <h2 className="food-display category-heading">
    {category} <h1> <img src={edit} alt="Edit Icon" className="category-image" /></h1>
</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ;
          }
          return null; 
        })}
      </div>
      <h3>Añadir nuevo producto +____</h3>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default FoodDisplay;