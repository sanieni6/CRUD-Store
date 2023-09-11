import axios from "axios";

async function loadProducts() {
    const { data } = await axios.get("http://localhost:3000/api/products");
    return data;
}

async function page() {

    const products = await loadProducts();


    return (
        <div className="grid gap-4 grid-cols-4">
            {
                products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg border-gray-800 mb-3 p-4">
                        <h2 className="text-lg font-bold text-black">{product.name}</h2>
                        <p className="text-2xl text-slate-600">{product.price}</p>
                        <p className="text-black">{product.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default page;