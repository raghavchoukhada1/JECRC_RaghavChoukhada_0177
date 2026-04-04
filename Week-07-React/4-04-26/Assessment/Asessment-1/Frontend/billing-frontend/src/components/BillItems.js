import React from "react";

export default function BillItems({ items, deleteItem, updateQty, updatePrice }) {

  const handlePriceChange = (index, value) => {
    let price = Number(value);

    // ❌ negative nahi hone dena
    if (price < 0) price = 0;

    // 🔥 Donation limit (₹10,000)
    if (price > 10000) {
      alert("Max donation limit is ₹10,000");
      price = 10000;
    }

    updatePrice(index, price);
  };

  return (
    <div>
      <h3>Items</h3>

      {items.length === 0 && <p>No items added</p>}

      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          
          <b>{item.name}</b>

          {/* PRICE INPUT */}
          <input
            type="number"
            value={item.price}
            onChange={(e) => handlePriceChange(i, e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          {/* QUANTITY INPUT */}
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQty(i, e.target.value)}
            style={{ marginLeft: "10px" }}
          />

          {/* DELETE */}
          <button onClick={() => deleteItem(i)} style={{ marginLeft: "10px" }}>
            ❌
          </button>

        </div>
      ))}
    </div>
  );
}