// src/components/CartButtons.jsx
import React from 'react';
import { useCart } from '../context/cartContext';

const CartButtons = ({ item }) => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  const handleRemoveFromCart = () => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        removeFromCart(item.id);
      } else {
        removeFromCart(item.id, true);
      }
    }
  };

  const handleUpdateQuantity = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        updateQuantity(item.id, newQuantity);
      }
    }
  };

  const handleIncrementQuantity = () => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      updateQuantity(item.id, cartItem.quantity + 1);
    } else {
      addToCart(item);
    }
  };

  const handleDecrementQuantity = () => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      updateQuantity(item.id, cartItem.quantity - 1);
    } else {
      removeFromCart(item.id, true);
    }
  };

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-lg"
          onClick={handleDecrementQuantity}
        >
          -
        </button>
        <div className="flex items-center gap-2">
          <p
            className={`text-gray-600 text-xs bg-green-200 py-1 px-2 rounded`}
          >
            {cartItem ? cartItem.quantity : 0}
          </p>
          <p
            className={`text-gray-600 text-xs bg-gray-200 py-1 px-2 rounded`}
          >
            In Cart
          </p>
        </div>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-lg"
          onClick={handleIncrementQuantity}
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 hover:text-red-700 text-sm mt-4"
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartButtons;