"use client"
import { useState } from "react";

function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
    });

    const handleChange = (e) => {
        console.log(e);
    };
    return (
        <form>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="name" onChange={handleChange} />
                <label htmlFor="price">Price:</label>
                <input type="text" placeholder="0.0" onChange={handleChange} />
                <label htmlFor="name">Description:</label>
                <input type="text" placeholder="Description" onChange={handleChange} />
            </form>
    )
}

export default ProductForm;