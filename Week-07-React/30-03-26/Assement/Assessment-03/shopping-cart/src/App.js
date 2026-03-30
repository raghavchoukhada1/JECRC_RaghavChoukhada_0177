import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

const productsData = [
  { id: 1, name: "React T-Shirt", price: 25 },
  { id: 2, name: "JavaScript Hoodie", price: 40 },
  { id: 3, name: "CSS Cap", price: 15 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      <ProductList products={productsData} addToCart={addToCart} />
      <Cart cart={cart} updateQty={updateQty} removeItem={removeItem} />
    </div>
  );
}

export default App;