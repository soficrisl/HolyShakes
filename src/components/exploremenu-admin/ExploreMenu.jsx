/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './ExploreMenu.css'
import PropTypes from 'prop-types'
import { MenuContext } from '../context/MenuContext'

const ExploreMenuAdmin = ({category, setCategory}) => {
  const { new_categories } = useContext(MenuContext);
  const [categories, setCategories] = useState(new_categories);
  useEffect(() => {
    setCategories(null);
    setCategories(new_categories);
  }, [new_categories])

  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>MENÚ ADMINISTRADOR</h1>
    <div className="explore-menu-list">
        {categories.map((item)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)} key={item.uid} className='explore-menu-list-item'>
                <p>{item.name}</p>
              </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

ExploreMenuAdmin.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenuAdmin