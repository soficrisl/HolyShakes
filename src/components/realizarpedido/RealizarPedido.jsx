/* eslint-disable no-unused-vars */
import React from 'react';
import './RealizarPedido.css';
import { useNavigate } from 'react-router-dom';

const RealizarPedido = () => {
  const navigate = useNavigate();

  const handleRealizarPedido = () => {
    navigate('/order');
  };

  return (
    <div className="realizar-pedido-container">
      <button className="realizar-pedido" onClick={handleRealizarPedido}>
        Realizar Pedido
      </button>
    </div>
  );
};

export default RealizarPedido;
