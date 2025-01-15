// src/App.jsx
import { useState } from 'react';
import { allProducts } from './assets/data';
import { useCart } from './context/cartContext';
import CartButtons from './components/CartButtons';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="grid place-items-center py-20">
      <h1 className="text-7xl italic text-gray-500 mb-16">
        Trend Alert: Must-Have Outfits of the Season
      </h1>
      <ShoppingCart isOpen={isCartOpen} onClose={toggleCart} />
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
            <div className="flex justify-center mt-4">
              <CartButtons item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;