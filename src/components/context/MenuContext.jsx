import React, { useState, createContext, useEffect } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app_firebase from "../../credentials";

export const MenuContext = createContext(null);

const MenuContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [new_food, setNew_food] = useState([]); 
  const [new_categories, setNew_categories] = useState([]); 

  
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      // Create a new object to prevent mutation
      const updatedCart = { ...prev };
  
      // Handle both numeric and alphanumeric IDs
      if (updatedCart.hasOwnProperty(itemId)) {
        updatedCart[itemId] += 1;
      } else {
        updatedCart[itemId] = 1;
      }
  
      return updatedCart;
    });
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
  
      if (updatedCart.hasOwnProperty(itemId)) {
        if (updatedCart[itemId] > 1) {
          updatedCart[itemId] -= 1;
        } else {
          delete updatedCart[itemId];
        }
      }
  
      return updatedCart;
    });
  };
  

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getProductosArray = async () => {
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

      setNew_food(productosArray);
    } catch (error) {
      console.error("Error fetching productos:", error);
      return []; // Handle errors gracefully, consider throwing an exception or returning an empty array
    }
  }
  const getCategoriesArray = async () => {
    const firestore = getFirestore(app_firebase);

    const categoriasRef = collection(firestore, "categorias"); // Replace "categorias" with your actual collection name

    try {
      const categoriasQuery = query(categoriasRef); // Optional: You can add filtering or ordering clauses here
      const querySnapshot = await getDocs(categoriasQuery);

      const categoriasArray = [];
      querySnapshot.forEach((doc) => {
        const categoriaData = doc.data();
        categoriaData.uid = doc.id; // Add the document ID (uid) as a property named "uid"
        categoriasArray.push(categoriaData);
      });
      setNew_categories(categoriasArray);
    } catch (error) {
      console.error("Error fetching categorias:", error);
      return []; // Handle errors gracefully, consider throwing an exception or returning an empty array
    }
  }
  useEffect(() => {
    // Example usage:
    getProductosArray().then(() => {
    });
    getCategoriesArray().then(() => {
    });
  }, []);

  const contextValue = {
    new_food,
    new_categories,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getProductosArray,
    getCategoriesArray
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
