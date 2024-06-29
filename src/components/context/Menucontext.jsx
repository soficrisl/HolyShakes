/* eslint-disable react/prop-types */
import { createContext } from "react";
import { food_list } from "../../assets/products";

export const MenuContext = createContext(null)

const MenuContextProvider = (props) => {



    const contextValue = {
        food_list
    }
    
    return (
        <MenuContext.Provider value = {contextValue}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider