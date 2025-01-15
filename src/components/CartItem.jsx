// src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../context/cartContext';

const CartItem = ({ item }) => {
  const { updateQuantity } = useCart();

  // Handle incrementing quantity
  const handleIncrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  // Handle decrementing quantity
  const handleDecrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      updateQuantity(item.id, 0); // Remove the item if quantity is 1 or less
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border-b py-6">
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
      <div className="flex items-center gap-2 mt-4">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-lg"
          onClick={handleDecrementQuantity}
        >
          -
        </button>
        <p className="text-gray-600 text-xs bg-green-200 py-1 px-2 rounded">
          {item.quantity}
        </p>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-lg"
          onClick={handleIncrementQuantity}
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 hover:text-red-700 text-sm mt-4"
        onClick={() => updateQuantity(item.id, 0)} // Remove the item
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;