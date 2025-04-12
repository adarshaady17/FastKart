import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FILE_API_END_POINT } from "../../utils/constant";

const ProductItemPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${FILE_API_END_POINT}/get`);
      const foundProduct = res.data.pro.find((item) => item._id === id);
      setProduct(foundProduct);
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20 text-gray-600 text-lg">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-20 text-red-500 text-lg">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
        <img
          src={product.Img}
          alt={product.ProName}
          className="w-full h-auto md:w-1/2 object-cover h-96"
        />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.ProName}</h2>
            <p className="text-blue-600 font-semibold text-xl mb-4">₹{product.Price}</p>
            <p className="text-gray-600">{product.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;
