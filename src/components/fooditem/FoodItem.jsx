/* eslint-disable no-unused-vars */
import React, { useContext} from 'react';
import './FoodItem.css'
import PropTypes from 'prop-types' 
import add_icon from '../../assets/add_icon.png';
import remove_icon from '../../assets/remove_icon.png';
import add_icon_green from '../../assets/add_icon_green.png';
import { MenuContext } from '../context/Menucontext';

const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(MenuContext);

  return (
    <div className='food-item'> 
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
                ? <img className='add' onClick={()=> addToCart(id)} src={add_icon} alt=""/>
                : <div className='food-item-counter'>
                    <img onClick={()=> removeFromCart(id)} src={remove_icon} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src={add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

FoodItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default FoodItem