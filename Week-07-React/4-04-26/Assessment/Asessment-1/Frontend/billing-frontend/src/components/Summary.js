export default function Summary({
  discount,
  setDiscount,
  discountType,
  setDiscountType,
  tax,
  setTax,
  generateBill
}) {
  return (
    <div>
      <h3>Summary</h3>

      <input
        placeholder="Discount"
        type="number"
        onChange={(e) => setDiscount(Number(e.target.value))}
      />

      <select onChange={(e) => setDiscountType(e.target.value)}>
        <option value="fixed">Fixed</option>
        <option value="percent">Percent</option>
      </select>

      <input
        placeholder="Tax %"
        type="number"
        onChange={(e) => setTax(Number(e.target.value))}
      />

      <button onClick={generateBill}>Generate Bill</button>
    </div>
  );
}