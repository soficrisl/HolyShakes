import React, { useState, createContext, useEffect } from "react";
import { food_list } from "../../assets/products";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app_firebase from "../../credentials";

export const MenuContext = createContext(null);

const MenuContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [new_food, setNew_food] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  async function getProductosArray() {
    const firestore = getFirestore(app_firebase);

    const productosRef = collection(firestore, "productos"); // Replace "productos" with your actual collection name

    try {
      const productosQuery = query(productosRef); // Optional: You can add filtering or ordering clauses here
      const querySnapshot = await getDocs(productosQuery);

      const productosArray = [];
      querySnapshot.forEach((doc) => {
        const productoData = doc.data();
        productoData.uid = doc.id; // Add the document ID (uid) as a property named "uid"
        productosArray.push(productoData);
      });

      return productosArray;
    } catch (error) {
      console.error("Error fetching productos:", error);
      return []; // Handle errors gracefully, consider throwing an exception or returning an empty array
    }
  }
  useEffect(() => {
    // Example usage:
    getProductosArray().then((productos) => {
      setNew_food(productos);
      // Use the productos array for further processing or display
    });
  }, []);

  const contextValue = {
    food_list,
    new_food,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
