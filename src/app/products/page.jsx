import axios from "axios";
import ProductCard from "../components/ProductCard";

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
                    < ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default page;