export default function Cart({ cart, onDelete }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (

    <div style={{ marginTop: "20px" }}>

      <h2>Cart</h2>

      {cart.length === 0 ? (

        <p>Cart is empty</p>

      ) : (

        cart.map((item, index) => (

          <div key={index} style={{ marginBottom: "10px" }}>

            {item.name} - ₹{item.price}

            {/* DELETE BUTTON */}
            <button
              onClick={() => onDelete(index)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

          </div>

        ))

      )}

      <h3>Total: ₹{total}</h3>

    </div>

  );

}