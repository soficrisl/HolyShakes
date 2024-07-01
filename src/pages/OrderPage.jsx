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

  console.log("OrderPage renderizando...");
  console.log("cartItems:", cartItems);
  console.log("food_list:", food_list);
  console.log("food_list IDs:", food_list.map(item => item._id)); // Verificar IDs en food_list

  const handleQuantityChange = (id, delta) => {
    const item = food_list.find((foodItem) => foodItem._id === id); // No convertir a entero
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

  try {
    const cartItemsArray = Object.entries(cartItems).map(([id, quantity]) => {
      const item = food_list.find((foodItem) => foodItem._id === id); // No convertir a entero
      if (!item) {
        console.error(`Item with id ${id} not found in food_list`);
        return null; // Return null if item is not found
      }
      return { ...item, quantity };
    }).filter(item => item !== null); // Filter out null values

    const subtotal = cartItemsArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxes = subtotal * 0.17; // Asumamos un 17% de impuestos
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
      <div>
        <Navbar />
        <div className="order-container">
          {cartItemsArray.map((item) => (
            <div key={item._id} className="order-item">
              <h2>{item.name}</h2>
              <p>${item.price ? item.price.toFixed(2) : "0.00"}</p>
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
          ))}
        </div>
        <div className="payment-section">
          <h2 className="payment-title">PAGO</h2>
          <p>Subtotal: <span className="amount">${subtotal ? subtotal.toFixed(2) : "0.00"}</span></p>
          <p>Impuestos: <span className="amount">${taxes ? taxes.toFixed(2) : "0.00"}</span></p>
          <p>Total a pagar: <span className="total-amount">${total ? total.toFixed(2) : "0.00"}</span></p>
          <button className="checkout-button" onClick={handleCheckout}>Pagar con PayPal</button>
        </div>
        <button className="discard-button" onClick={handleDiscard}>Descartar</button>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error al renderizar la página de pedido: ", error);
    return <div>Hubo un error al cargar la página. Por favor, inténtalo de nuevo.</div>;
  }
};

export default OrderPage;
