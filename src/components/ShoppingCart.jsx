// src/components/ShoppingCart.jsx
import { ShoppingCartIcon, XIcon } from 'lucide-react';
import { useCart } from '../context/cartContext';
import CartItem from './CartItem';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`w-[300px] h-screen bg-gray-200 fixed right-0 top-0 z-30 border-l-4 border-red-200 rounded-tl-lg transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Cart Header */}
      <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border rounded-lg pl-4">
        <h1 className="text-xl text-gray-600">Shopping Cart</h1>
        <button
          className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center border-2 rounded-full hover:bg-yellow-500 transition-colors"
          onClick={onClose}
        >
          <XIcon className="text-white" />
        </button>
      </div>

      {/* Cart Toggle Button */}
      <button
        className="w-9 h-9 bg-yellow-400 absolute -left-14 top-3 z-20 grid place-items-center border-2 rounded-full"
        onClick={onClose}
      >
        <ShoppingCartIcon className="text-xs text-white" />
        <span className="w-6 h-6 bg-pink-400 absolute -bottom-4 -left-2 grid place-items-center border border-gray-300 rounded-full text-sm text-white">
          {cartItems.length}
        </span>
      </button>

      {/* Cart Items List */}
      <div className="h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20">
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>

      {/* Cart Footer */}
      <div className="w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border rounded-lg">
        <h1 className="text-xl text-gray-600">Total: ${totalPrice.toFixed(2)}</h1>
        <button className="rounded-md bg-blue-300 px-2 text-white hover:bg-blue-400 transition-colors">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;