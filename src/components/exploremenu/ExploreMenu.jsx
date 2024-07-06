/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './ExploreMenu.css'
import PropTypes from 'prop-types'
import { MenuContext } from '../context/MenuContext'

const ExploreMenu = ({category, setCategory}) => {
  const { new_categories } = useContext(MenuContext);
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>MENÚ</h1>
    <div className="explore-menu-list">
        {new_categories.map((item)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.nombre?"All":item.nombre)} key={item.uid} className='explore-menu-list-item'>
                <p>{item.nombre}</p>
              </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu