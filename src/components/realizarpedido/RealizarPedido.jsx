import React from 'react';
import './RealizarPedido.css';

const RealizarPedido = ({ onClick }) => {
  return (
    <div className="realizar-pedido-container">
      <button className="realizar-pedido" onClick={onClick}>
        Realizar Pedido
      </button>
    </div>
  );
};

export default RealizarPedido;
