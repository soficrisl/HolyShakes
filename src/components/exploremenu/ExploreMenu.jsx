/* eslint-disable no-unused-vars */
import React from 'react'
import './ExploreMenu.css'
import PropTypes from 'prop-types'
import {menu_list} from '../../assets/products'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explora nuestro menu</h1>
    <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <p>{item.menu_name}</p>
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