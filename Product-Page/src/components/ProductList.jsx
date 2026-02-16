import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ count }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("🔁 ProductList Rendered");

  // ✅ API Call using async/await
  const fetchProductsAsync = async () => {
    try {
      setLoading(true);
      console.log("📡 Fetching products (async/await)...");

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
      console.log("✅ Products loaded");
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ useEffect (runs on mount)
  useEffect(() => {
    console.log("🚀 ProductList Mounted");
    fetchProductsAsync();

    return () => {
      console.log("🧹 ProductList Unmounted");
    };
  }, []);

  // ✅ useEffect with TWO dependencies
  useEffect(() => {
    console.log("🎯 useEffect triggered (count changed)");
  }, [count]);

  return (
    <div>
      <h2>Products</h2>

      {loading && <p>Loading...</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}