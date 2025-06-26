import { useState } from "react";
import toast from "react-hot-toast";
import Buttons  from "./component/Buttons";
import { createProductApi } from "../api/Api";


function Product() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submit = async () => {
    if (!productName || !description || !price) {
      return toast.error("Please fill in all fields");
    }

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", description);
      formData.append("price", price);

      const response = await createProductApi(formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setProductName("");
        setDescription("");
        setPrice("");
        return;
      }

      toast.error(response.data.message);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-4">
      <form className="mt-10 bg-gray-300 p-4 space-y-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          className="w-full p-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2"
        ></textarea>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-2"
        />
        <Buttons label="Add Product" onClick={submit} />
      </form>

      <div className="mt-4">
        <p>Live Preview:</p>
        <p>Product Name: {productName}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default Product;