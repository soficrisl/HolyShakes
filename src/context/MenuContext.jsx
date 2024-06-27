/* eslint-disable react/prop-types */
import { createContext } from "react";

export const MenuContext = createContext(null)

const MenuContextProvider = (props) => {



    const contextValue = {

    }
    return (
        <MenuContext.Provider value = {contextValue}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider