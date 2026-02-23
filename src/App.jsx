import { useMemo, useState } from "react";
import "./App.css";

import Header from "./components/header";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlxKEl0BDTROQEUceZbphxQQiKQUt4DlKGT4lgu2XDxgq9I-ASV11KCFEJgeKpuLaXMERtxdYAlFjEgw5kQk9DJ7X951UOCoovYSlTg6k2VOPe3x4vHP014e8",
    },
    {
      id: 2,
      name: "Watch",
      price: 1500,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmRkb0fwUBlkOPaPhJTiec0SYV_r3yPae30Q_ADMb1qRQtxk3KtIbfYOGq5FNa6NCgIHZhl8b8t1HKMDicmvqATFxjlZ3wROYs1BkWichHIpxT84_rVwHIKXU",
    },
    {
      id: 3,
      name: "Bag",
      price: 1000,
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRiPqPKP98oNDo-TXRd_OYIZiPdWHXcOooS1h2Wo_dXJhXbveybsqrgqVGnoMfbgBC7Kn924zDR-7R8VhFWY3tsMFDGSUd8Vv6SQFOsK8W6p7sJ6yCvzM_S_6I",
    },
    {
      id: 4,
      name: "Headphone",
      price: 2500,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOQP42pyctAiuWATGrIJmeJofj8Q3GSnKIZJXItGHnxtDXQNTwvcXvQVAfaeevd34bKJpc0tW5gJTS_PthZG5pq2IwN5LZwnXoQnf44dFwiWr7Vgsv_8Hf6Q",
    },
  ];

  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [query, products]);
  const deleteItem = (index) => {

  setCart(cart.filter((item, i) => i !== index));

};
  return (
    <div>
      {}
      <Header cartCount={cart.length} />

      <div style={{ padding: "20px" }}>
        {}
        <div className="searchWrap">
          <input
            className="searchInput"
            type="text"
            placeholder="Search products (Shoes, Watch...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (
            <button className="clearBtn" onClick={() => setQuery("")}>
              Clear
            </button>
          )}
        </div>

        {}
        <p style={{ marginTop: 10 }}>
          Showing <b>{filteredProducts.length}</b> product(s)
        </p>

        <ProductList products={filteredProducts} onAdd={addToCart} />
        <Cart cart={cart} onDelete={deleteItem} />
      </div>
    </div>
  );
}