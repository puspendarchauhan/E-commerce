import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div className="productContainer">

      <h2 className="productTitle">
        Products
      </h2>

      {/* FIXED CLASS NAME */}
      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />

        ))}

      </div>

    </div>
  );
}