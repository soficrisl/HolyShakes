/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./FoodItem.css";
import PropTypes from "prop-types";
import edit from "../../assets/edit.png";
import ProductModal from "./ProductModal";

const FoodItemAdmin = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const [data, setData] = useState({
    id: id,
    name: name,
    price: price,
    description: description,
    image: image
  });
  useEffect(() => {
    setData({
      id: id,
      name: name,
      price: price,
      description: description,
      image: image
    })
  }, [id])
  
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
        </div>
        <p className="food-item-description">{description} </p>
        <p className="food-item-price">${price.toFixed(2)}</p>
        <ProductModal uid={data.id} ><img src={edit} alt="Edit Icon" className="title-image" /></ProductModal>
      </div>
    </div>
  );
};

FoodItemAdmin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItemAdmin;

