import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FILE_API_END_POINT } from "../../utils/constant";

const CreateListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      payload.append("image", formData.image);
      payload.append("name", formData.name);
      payload.append("price", formData.price);
      payload.append("description", formData.description);

      const res = await axios.post(`${FILE_API_END_POINT}/upload`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("Product listed successfully!");
      console.log("Upload Response:", res.data);
      navigate("/");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to list product. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="price"
            placeholder="Price (e.g. ₹999)"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          ></textarea>

          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full px-4 py-2 border rounded-xl"
            required
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full border border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-50 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
