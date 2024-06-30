/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './FoodDisplay.css';
import PropTypes from 'prop-types';
import { MenuContext } from '../context/Menucontext';
import FoodItem from '../fooditem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(MenuContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>{category}</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) { 
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
          }
          return null; 
        })}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default FoodDisplay;