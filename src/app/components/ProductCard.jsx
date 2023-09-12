import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 hover:bg-gray-200 hover:cursor-pointer"
      href={`/products/${product.id}`}
    >
      {product.image && <img src={product.image} className="w-full h-40 rounded-t-lg" />}
      <div className="p-4">
        <h2 className="text-lg font-bold text-black">{product.name}</h2>
        <p className="text-2xl text-slate-600">{product.price}</p>
        <p className="text-black">{product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
