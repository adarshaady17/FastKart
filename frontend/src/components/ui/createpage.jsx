import React, { useState } from "react";
import axios from "axios";
import { FILE_API_END_POINT } from "../../utils/constant";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    ProName: "",
    Price: "",
    Description: "",
    Img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "Img") {
      setFormData((prev) => ({ ...prev, Img: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("ProName", formData.ProName);
    data.append("Price", formData.Price);
    data.append("Description", formData.Description);
    data.append("Img", formData.Img);

    try {
      const res = await axios.post(`${FILE_API_END_POINT}/upload`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      alert(res.data.message);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Product creation failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center">Create Product</h2>
        <input name="ProName" value={formData.ProName} onChange={handleChange} placeholder="Product Name"
          className="w-full border px-4 py-2 rounded-xl" required />
        <input name="Price" value={formData.Price} onChange={handleChange} placeholder="Price" type="number"
          className="w-full border px-4 py-2 rounded-xl" required />
        <textarea name="Description" value={formData.Description} onChange={handleChange} placeholder="Description"
          className="w-full border px-4 py-2 rounded-xl" required />
        <input type="file" name="Img" onChange={handleChange}
          className="w-full border px-4 py-2 rounded-xl" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
