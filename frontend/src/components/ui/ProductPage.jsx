import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FILE_API_END_POINT } from "../../utils/constant";

const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${FILE_API_END_POINT}/get`, {
        withCredentials: true,
      });
      setProducts(res.data.pro.reverse());
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check admin role from localStorage
  const checkAdminStatus = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsAdmin(user.role === "admin");
    }
  };

  useEffect(() => {
    checkAdminStatus();
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        {isAdmin && (
          <button
            onClick={() => navigate("/create")}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Create New Product
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No products found.</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow p-4 hover:shadow-lg hover:scale-[1.01] transition-transform"
            >
              <img
                src={product.Img || "/placeholder.jpg"}
                alt={product.ProName}
                onError={(e) => (e.target.src = "/placeholder.jpg")}
                className="w-auto h-52 object-cover rounded-xl"
              />
              <h2 className="text-xl font-semibold">{product.ProName}</h2>
              <p className="text-blue-600 font-medium">₹{product.Price}</p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.Description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
