import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";

const Signup = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
    Role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/signup`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      alert(res.data.message);
      window.location.href = "/login"; // Redirect after successful signup
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            value={formData.Name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            name="Role"
            value={formData.Role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={redirectToLogin}
            className="w-full border border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-50 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
