export default function ProductCard({ product, onAdd }) {

  return (

    <div className="card">

      <img src={product.image} alt={product.name} />

      <h4>
        {product.name}
      </h4>

      <p>
        ₹{product.price}
      </p>

      <button onClick={() => onAdd(product)}>
        Add to Cart
      </button>

    </div>

  );

}