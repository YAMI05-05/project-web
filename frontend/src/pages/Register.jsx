import { useState } from "react";
import toast from "react-hot-toast";
import Buttons from "./component/Buttons";
import { createProductApi } from "../api/Api";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !category) {
      return toast.error("Please fill in all fields");
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      const response = await createProductApi(formData);

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error("Error creating product:", err);
      toast.error("Something went wrong while creating the product.");
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={submit} className="mt-10 bg-gray-300 p-5 rounded-lg space-y-3">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product Title"
          className="block w-full p-2 rounded"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="block w-full p-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="block w-full p-2 rounded"
        />
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="block w-full p-2 rounded"
        />

        <Buttons label="Add Product" onClick={submit} />
      </form>
    </div>
  );
}

export default AddProduct;
