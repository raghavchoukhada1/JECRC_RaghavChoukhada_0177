import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, updateQty, removeItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQty={updateQty}
          removeItem={removeItem}
        />
      ))}

      <h3>Total = ${total}</h3>
    </div>
  );
}

export default Cart;