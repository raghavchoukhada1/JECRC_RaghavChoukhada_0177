import jsPDF from "jspdf";

export default function BillsList({ bills, deleteBill }) {

  const exportPDF = (bill) => {
    const doc = new jsPDF();

    doc.text("Invoice", 10, 10);
    doc.text(`Invoice: ${bill.invoiceNumber}`, 10, 20);
    doc.text(`Date: ${new Date(bill.createdAt).toLocaleString()}`, 10, 30);

    let y = 40;

    bill.items?.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity}`,
        10,
        y
      );
      y += 10;
    });

    doc.text(`Final Amount: ₹${bill.finalAmount}`, 10, y + 10);

    doc.save(`Invoice-${bill.invoiceNumber}.pdf`);
  };

  return (
    <div>
      <h3>Past Bills</h3>

      {bills.map(b => (
        <div key={b.id}>
          {b.invoiceNumber} - ₹{b.finalAmount}

          <button onClick={() => exportPDF(b)}>PDF</button>
          <button onClick={() => deleteBill(b.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}