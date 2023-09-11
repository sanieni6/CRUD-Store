import Link from "next/link";


function ProductCard({product}) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-200 hover:cursor-pointer"
    href={`/products/${product.id}`}
    >
      <h2 className="text-lg font-bold text-black">{product.name}</h2>
      <p className="text-2xl text-slate-600">{product.price}</p>
      <p className="text-black">{product.description}</p>
    </Link>
  );
}

export default ProductCard;
