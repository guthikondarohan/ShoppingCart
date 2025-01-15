// src/App.jsx
import { useState } from 'react';
import { allProducts } from './assets/data';
import { useCart } from './context/cartContext';
import CartItem from './components/CartItem';
import CartButtons from './components/CartButtons';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="grid place-items-center py-20">
      <h1 className="text-7xl italic text-gray-500 mb-16">
        Trend Alert: Must-Have Outfits of the Season
      </h1>
      <ShoppingCart />
      <button
        className="fixed top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 text-2xl"
        onClick={() => setShowCart(!showCart)}
      >
        Cart ({cartItems.length})
      </button>
      {showCart && (
        <div className="fixed top-20 right-4 bg-white p-12 rounded-lg shadow-lg w-1/2">
          <h2 className="text-4xl font-semibold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))
          )}
        </div>
      )}
      <div className="grid grid-cols-3 place-items-center gap-12">
        {allProducts?.map((item) => (
          <div
            key={item.id}
            className="border p-12 rounded-lg shadow-lg w-96 h-96 flex flex-col justify-center items-center"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="rounded-lg mb-4"
              width={200}
              height={200}
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-lg">${item.price}</p>
            {cartItems.find((cartItem) => cartItem.id === item.id) ? (
              <div className="flex justify-center mt-4">
                <CartButtons item={item} />
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 text-lg"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;