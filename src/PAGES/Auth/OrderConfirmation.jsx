import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container">
      <h1>Pedido Concluído!</h1>
      <p>Seu pedido foi realizado com sucesso.</p>
      <p>Faça login para confirmar seu pedido.</p>
      <Link to="/signin">Ir para a página de login</Link>
    </div>
  );
};

export default OrderConfirmation;
