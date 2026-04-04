import React, { useState, useEffect } from "react";
import API from "./services/api";
import Catalog from "./components/Catalog";
import BillItems from "./components/BillItems";
import Summary from "./components/Summary";
import BillsList from "./components/BillList";

function App() {
  const [catalog, setCatalog] = useState([]);
  const [catalogType, setCatalogType] = useState("Entrance");
  const [items, setItems] = useState([]);
  const [bills, setBills] = useState([]);

  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("fixed");
  const [tax, setTax] = useState(18);

  // Load catalog
  useEffect(() => {
    API.get("/catalog")
      .then(res => setCatalog(res.data))
      .catch(err => console.log(err));
  }, []);

  // Load bills
  useEffect(() => {
    API.get("/bill")
      .then(res => setBills(res.data))
      .catch(err => console.log(err));
  }, []);

  const addItem = (item) => {
    setItems([...items, { ...item, quantity: 1 }]);
  };

  const addCustomItem = () => {
    setItems([...items, {
      name: "Custom",
      price: 0,
      quantity: 1,
      isCustom: true
    }]);
  };

  const deleteItem = (i) => {
    setItems(items.filter((_, index) => index !== i));
  };

  const updateQty = (i, qty) => {
    const updated = [...items];
    updated[i].quantity = Number(qty);
    setItems(updated);
  };

  const updatePrice = (i, price) => {
    const updated = [...items];
    updated[i].price = Number(price);
    setItems(updated);
  };

  const generateBill = async () => {
    try {
      const res = await API.post("/bill", {
        items,
        discount,
        discountType,
        tax
      });

      setBills(prev => [res.data, ...prev]);
      setItems([]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBill = async (id) => {
    await API.delete(`/bill/${id}`);
    setBills(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="container">
      <h1>Billing System</h1>

      {/* Catalog Switch */}
      <select onChange={(e) => setCatalogType(e.target.value)}>
        <option>Entrance</option>
        <option>Donation</option>
        <option>Product</option>
      </select>

      <Catalog
        catalog={catalog}
        type={catalogType}
        addItem={addItem}
      />

      <button onClick={addCustomItem}>+ Custom Item</button>

      <BillItems
        items={items}
        deleteItem={deleteItem}
        updateQty={updateQty}
        updatePrice={updatePrice}
      />

      <Summary
        items={items}
        discount={discount}
        setDiscount={setDiscount}
        discountType={discountType}
        setDiscountType={setDiscountType}
        tax={tax}
        setTax={setTax}
        generateBill={generateBill}
      />

      <BillsList bills={bills} deleteBill={deleteBill} />
    </div>
  );
}

export default App;