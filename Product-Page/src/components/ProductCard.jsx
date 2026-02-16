export default function ProductCard({ product }) {
  console.log(`🧩 ProductCard Rendered: ${product.title}`);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        borderRadius: "10px",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        width="100%"
        style={{ borderRadius: "10px" }}
      />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
    </div>
  );
}