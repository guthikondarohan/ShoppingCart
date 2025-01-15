// src/components/CartItem.jsx
import React from 'react';
import CartButtons from './CartButtons';

const CartItem = ({ item, onRemove }) => {
  return (
    <div key={item.id} className="flex flex-col items-center justify-center border-b py-6">
      <img
        src={item.imageUrl}
        alt={item.name}
        width={100}
        height={100}
        className="rounded-lg mb-4"
      />
      <div>
        <h1 className="text-zinc-700 font-semibold text-sm">{item.name}</h1>
        <p className="text-gray-600 text-sm">${item.price}</p>
        <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
      </div>
      <CartButtons item={item} />
      <button
        className="text-red-500 hover:text-red-700 text-sm mt-4"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;