import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("🔁 App Rendered");

  // ✅ useEffect with ONE dependency
  useEffect(() => {
    console.log("🎯 useEffect triggered (count changed)");
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing Page</h1>

      <button onClick={() => setCount(count + 1)}>
        Click Count: {count}
      </button>

      <ProductList count={count} />
    </div>
  );
}