import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/navigation/Footer';
import NavbarAdmin from '../components/navigation/NavbarAdmin';
import '../styles.css';
import SearchBar from '../components/searchbar/SearchBar';
import RealizarPedido from '../components/realizarpedido/RealizarPedido';
import { MenuContext } from '../components/context/MenuContext'; 
import ExploreMenuAdmin from '../components/exploremenu-admin/ExploreMenu';
import FoodDisplayAdmin from '../components/fooddisplay-admin/FoodDisplay';
import NewFoodDisplay from '../components/fooddisplay-admin/NewFoodDisplay';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app_firebase from '../credentials';

function MenuAdmin() {
  const [category, setCategory] = useState('All');

  return (
    <>
      <div className=" w-full h-full bg-gradient-circle">
        <NavbarAdmin/>
        <ExploreMenuAdmin category={category} setCategory={setCategory}/>
        <FoodDisplayAdmin category={category}/>
        <NewFoodDisplay/>
        <Footer/>
      </div>
    </>
  );
}

export default MenuAdmin;