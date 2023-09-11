"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const [file, setFile] = useState(null);

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    //console.log(e.target.value, e.target.name);
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/products/${params.id}`).then((res) => {
        setProduct({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
        });
      });
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!params.id) {

      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("productImage", file);

      const res = await axios.post("/api/products", formData, {headers: {"Content-Type": "multipart/form-data"}});
      console.log(res);
    } else {
      const res = await axios.put(`/api/products/${params.id}`, product);
      console.log(res);
    }
    form.current.reset();
    router.refresh();
    router.push("/products");
  };

  return (

      <form
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
      ref={form}
    >
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Name:
      </label>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
        autoFocus
        value={product.name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
      />
      <label
        htmlFor="price"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Price:
      </label>
      <input
        name="price"
        type="text"
        placeholder="0.0"
        onChange={handleChange}
        value={product.price}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
      />
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Description:
      </label>
      <textarea
        name="description"
        rows={3}
        placeholder="Description"
        onChange={handleChange}
        value={product.description}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
      />

      <label
        htmlFor="productImage"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Image:
      </label>

      <input
        type="file"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-2"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />

{file && <img src={URL.createObjectURL(file)} className="w-96 h-50 object-contain mx-auto my-4" />}

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {params.id ? "Update product" : "Create product"}
      </button>
    </form>

    
  );
}

export default ProductForm;
