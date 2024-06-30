/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from "react";
import { food_list } from "../../assets/products";
import { unstable_useViewTransitionState } from "react-router-dom";

export const MenuContext = createContext(null)

const MenuContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
    }

    useEffect(()=> {
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    
    return (
        <MenuContext.Provider value = {contextValue}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider