import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import '../components/OrderPage.css';
import cartIcon from '../assets/cart-icon.png';
import trashIcon from '../assets/trash-icon.png';
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
    const item = food_list.find((foodItem) => foodItem._id === parseInt(id));
    return { ...item, quantity };
  });

  const subtotal = cartItemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.17; // Assumed 17% tax
  const total = subtotal + taxes;

  const handleCheckout = () => {
    if (cartItemsArray.length === 0) {
      alert('The cart is empty');
      return;
    }
    // Logic to process the order
    console.log('Order processed', cartItemsArray);
  };

  return (
    <div>
      <Navbar />
      <div className="order-page">
        <h1 className="title">
          <span className="title-text">CARRITO</span>
          <img src={cartIcon} alt="Carrito" className="icon" />
        </h1>
        <div className="cart-items">
          {cartItemsArray.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p className="item-price">
                  <span className="price-label">${item.price.toFixed(2)}</span>
                </p>
                <div className="quantity-controls">
                  {item.quantity === 1 ? (
                    <>
                      <button className="trash-button" onClick={() => handleRemoveItem(item._id)}>
                        <img src={trashIcon} alt="Eliminar" />
                      </button>
                      <span>{item.quantity}</span>
                      <button className="black-button" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                    </>
                  ) : (
                    <>
                      <button className="black-button" onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="black-button" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
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
          <p>Total a pagar: <span className="total-amount">${total.toFixed(2)}</span></p>
          <button className="checkout-button" onClick={handleCheckout}>Pagar con PayPal</button>
        </div>
        <button className="discard-button" onClick={handleDiscard}>Descartar</button>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
