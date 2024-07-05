import React, { useContext } from 'react';
import './FoodDisplay.css';
import PropTypes from 'prop-types';
import { MenuContext } from '../context/MenuContext';
import FoodItem from '../fooditem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { new_food, addToCart, removeFromCart } = useContext(MenuContext);
  return (
    <div className='food-display' id='food-display'>
      <h2>{category}</h2>
      <div className="food-display-list">
        {new_food.map((item, index) => {
          if (category === "All" || category === item.categoria) {
            return (
              <FoodItem
                key={index}
                id={item.uid}
                name={item.nombre}
                description={item.descripcion}
                price={item.precio}
                image={item.imagen}
                onAddToCart={() => addToCart(item.uid)}
                onRemoveFromCart={() => removeFromCart(item.uid)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;
