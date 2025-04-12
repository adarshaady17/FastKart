import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", Role: "user" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert(res.data.message);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input type="email" name="email" value={formData.email} onChange={handleChange}
          className="w-full border px-4 py-2 rounded-xl" placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange}
          className="w-full border px-4 py-2 rounded-xl" placeholder="Password" required />
        <select name="Role" value={formData.Role} onChange={handleChange}
          className="w-full border px-4 py-2 rounded-xl">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl">Login</button>
      </form>
    </div>
  );
};

export default Login;
