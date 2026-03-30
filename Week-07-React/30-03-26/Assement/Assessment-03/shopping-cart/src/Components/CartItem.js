import React from "react";

function CartItem({ item, updateQty, removeItem }) {
  return (
    <div>
      {item.name} x {item.qty} = ${item.price * item.qty}

      <button onClick={() => updateQty(item.id, 1)}>+</button>
      <button onClick={() => updateQty(item.id, -1)}>-</button>

      <button onClick={() => removeItem(item.id)}>❌</button>
    </div>
  );
}

export default CartItem;