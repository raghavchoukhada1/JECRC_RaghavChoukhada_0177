export default function Catalog({ catalog, type, addItem }) {

  const filtered = catalog.filter(
    item => item.type.toLowerCase().includes(type.toLowerCase())
  );

  return (
    <div>
      <h3>{type} Catalog</h3>

      {/* Entrance */}
      {type === "Entrance" &&
        filtered.map(item => (
          <button key={item.id} onClick={() => addItem(item)}>
            🎫 {item.name} - ₹{item.price}
          </button>
        ))
      }

      {/* Donation */}
      {type === "Donation" && (
        <>
          {filtered.map(item => (
            <button key={item.id} onClick={() => addItem(item)}>
              💰 {item.name}
            </button>
          ))}

          {/* Custom Donation */}
          <button
            onClick={() =>
              addItem({
                name: "Custom Donation",
                price: 0,
                quantity: 1,
                isCustom: true
              })
            }
          >
            ➕ Custom Donation
          </button>
        </>
      )}

      {/* Products */}
      {type === "Product" &&
        filtered.map(item => (
          <button key={item.id} onClick={() => addItem(item)}>
            🛒 {item.name} - ₹{item.price}
          </button>
        ))
      }
    </div>
  );
}