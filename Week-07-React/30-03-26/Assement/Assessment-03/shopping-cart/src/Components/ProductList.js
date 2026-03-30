import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;