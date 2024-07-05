/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { MenuContext } from "../context/MenuContext";
import FoodItemVacio from "../fooditem-admin/FoodItemVacio";
import edit from "../../assets/edit.png";
import ProductModal from "../fooditem-admin/ProductModal";
import CategoryModal from "../fooditem-admin/CategoryModal";

const NewFoodDisplay = () => {
  const { new_food } = useContext(MenuContext);

  return (
    <div className="food-display" id="food-display">
      <CategoryModal uid={null} ><h3>Añadir nueva categoría +</h3></CategoryModal>
      <ProductModal uid={null} ><h3>Añadir Producto +</h3></ProductModal>
    </div>
  );
};

export default NewFoodDisplay;
