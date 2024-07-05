import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import PropTypes from "prop-types";
import { MenuContext } from "../context/MenuContext";
import FoodItemAdmin from "../fooditem-admin/FoodItem";


const FoodDisplayAdmin = ({ category }) => {
  const { new_food } = useContext(MenuContext);
  const [food, setFood] = useState(new_food);
  useEffect(() => {
    setFood(null);
    setFood(new_food);
  }, [new_food])
  
  return (
    <div className="food-display" id="food-display">
      <h2>{category}</h2>
      <div className="food-display-list">
        {food.map((item) => {
          if (category === "All" || category === item.categoria) {
            return (
              <>
                <FoodItemAdmin
                  key={item.uid}
                  id={item.uid}
                  name={item.nombre}
                  description={item.descripcion}
                  price={item.precio}
                  image={item.imagen}
                />
              </>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

FoodDisplayAdmin.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplayAdmin;
