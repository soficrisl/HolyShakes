import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import '../components/OrderPage.css';
import trashIcon from '../assets/trash-icon.png';
import cartIcon from '../assets/cart-icon.png';
import { MenuContext } from '../components/context/MenuContext';

const OrderPage = () => {
  const { cartItems, food_list, removeFromCart, addToCart } = useContext(MenuContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    const item = food_list.find((foodItem) => foodItem._id === id);
    if (item) {
      if (delta > 0) {
        addToCart(id);
      } else {
        removeFromCart(id);
      }
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleDiscard = () => {
    navigate('/menu');
  };

  const cartItemsArray = Object.entries(cartItems).map(([id, quantity]) => {
    const item = food_list.find((foodItem) => foodItem._id === id);
    if (!item) {
      console.error(`Item with id ${id} not found in food_list`);
      return null; // Return null if item is not found
    }
    return { ...item, quantity };
  }).filter(item => item !== null); // Filter out null values

  const subtotal = cartItemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.17; // Assuming a 17% tax rate
  const total = subtotal + taxes;

  const handleCheckout = () => {
    try {
      if (cartItemsArray.length === 0) {
        alert('El carrito está vacío');
        return;
      }
      console.log('Pedido procesado', cartItemsArray);
    } catch (error) {
      console.error("Error durante el proceso de pago: ", error);
    }
  };

  return (
    <div className="order-page">
      <Navbar />
      <div className="order-header">
        <h1 className="order-title">CARRITO</h1>
        <img src={cartIcon} alt="Carrito" className="order-cart-icon" />
      </div>
      <div className="order-container">
        {cartItemsArray.map((item) => (
          <div key={item._id} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <div className="order-item-details">
              <h2 className="order-item-name">{item.name}</h2>
              <p className="order-item-price">${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                {item.quantity === 1 ? (
                  <>
                    <button className="trash-button" onClick={() => handleRemoveItem(item._id)}>
                      <img src={trashIcon} alt="Eliminar" />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                  </>
                ) : (
                  <>
                    <button className="quantity-button" onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantity-button" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="payment-section">
        <h2 className="payment-title">PAGO</h2>
        <p>Subtotal: <span className="amount">${subtotal.toFixed(2)}</span></p>
        <p>Impuestos: <span className="amount">${taxes.toFixed(2)}</span></p>
        <p className="total-amount-line">Total a pagar: <span className="total-amount">${total.toFixed(2)}</span></p>
        <button className="checkout-button" onClick={handleCheckout}>Pagar con PayPal</button>
      </div>
      <button className="discard-button" onClick={handleDiscard}>Descartar</button>
      <Footer />
    </div>
  );
};

export default OrderPage;
