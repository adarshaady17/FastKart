import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { isLoggedIn, getUser, removeUser } from "../../utils/auth"; // utility functions

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser(); // Retrieving user data from localStorage
    setUser(userData);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      removeUser(); // clear user data from localStorage
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to logout.");
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="https://t4.ftcdn.net/jpg/04/15/69/35/360_F_415693545_1fRujWZXJCsBphFmbV4c45MQyD2qTI9L.jpg"
            alt="FastKart Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-gray-800">FastKart</span>
          <Link to="/" className="ml-6 text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
        </div>

        {/* Right side: Auth buttons */}
        <div className="space-x-4">
          {isLoggedIn() && user ? (
            <>
              <span className="text-gray-700 text-sm md:text-base">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
