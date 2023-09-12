import axios from "axios";
import Buttons from "./buttons";

async function loadProduct(id) {
    const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);
    return data;
}

async function ProductPage({params}) {
    const product = await loadProduct(params.id);
    return (
        <section className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <div className="flex w-4/6 justify-center">
        <div className="p-6 bg-white text-black w-1/3">
            <h3 className="text-2xl font-bold mb-3">Name: {product.name}</h3>
            <h4 className="text-4xl font-bold">Price: {product.price}</h4>
            <p className="text-slate-700">Description: {product.description}</p>

           < Buttons productId = {product.id}/>
        </div>
        <img src={product.image} className="w-1/3 h-80" />
        </div>
        </section>
    )
    
}

export default ProductPage;