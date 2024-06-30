// Import necessary dependencies
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import Navbar from '../components/navigation/Navbar';
import '../styles.css';
import FoodDisplay from '../components/fooddisplay/FoodDisplay';
import ExploreMenu from '../components/exploremenu/ExploreMenu';
import SearchBar from '../components/searchbar/SearchBar';
import RealizarPedido from '../components/realizarpedido/RealizarPedido';
import { MenuContext } from '../components/context/MenuContext';

function Menu() {
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();
  const { addToCart } = useContext(MenuContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRealizarPedido = () => {
    navigate('/order');
  };

  return (
    <>
      <div className="w-full h-full bg-gradient-circle">
        <Navbar />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} onAddToCart={handleAddToCart} />
        <RealizarPedido onClick={handleRealizarPedido} />
        <Footer />
      </div>
    </>
  );
}

export default Menu;
