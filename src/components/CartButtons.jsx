// src/components/CartButtons.jsx
import React from 'react';
import { useCart } from '../context/cartContext';

const CartButtons = ({ item }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  // Check if the item is already in the cart
  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // Handle incrementing quantity
  const handleIncrementQuantity = () => {
    updateQuantity(item.id, cartItem.quantity + 1);
  };

  // Handle decrementing quantity
  const handleDecrementQuantity = () => {
    updateQuantity(item.id, cartItem.quantity - 1);
  };

  // Handle removing the item completely
  const handleRemoveFromCart = () => {
    updateQuantity(item.id, 0); // Set quantity to zero to remove the item
  };

  return (
    <div className="flex flex-col items-center">
      {cartItem && cartItem.quantity > 0 ? (
        // If the item is in the cart and quantity > 0, show quantity controls and Remove button
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-lg"
              onClick={handleDecrementQuantity}
            >
              -
            </button>
            <p className="text-gray-600 text-xs bg-green-200 py-1 px-2 rounded">
              {cartItem.quantity}
            </p>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-lg"
              onClick={handleIncrementQuantity}
            >
              +
            </button>
          </div>
          <button
            className="text-red-500 hover:text-red-700 text-sm mt-2"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
        </div>
      ) : (
        // If the item is not in the cart or quantity is zero, show the "Add to Cart" button
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 text-lg"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default CartButtons;