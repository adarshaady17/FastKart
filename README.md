# FastKart
A mini E-commerce Product Listing app

This is a full-stack E-Commerce app built with the **MERN** stack (MongoDB, Express.js, React, Node.js). It allows users to browse products and only **admins** can upload new product listings with images using Cloudinary. Authentication is implemented using JWT.

---

# Features

-  User Registration & Login (JWT-based Auth)
-  Role-based access (Admin/User)
-  Admin can create new products with image, name, price, and description
-  All users can view product listings
-  Image uploads handled with Multer and streamed to Cloudinary
-  Real-time updates (latest products shown first)
-  React Router navigation to product details
-  Protected routes for admin-only access

---

# Tech Stack

### Frontend:
- React
- Tailwind CSS
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (with Cloudinary for image storage)
- JSON Web Tokens (JWT)
- CORS

---

##  setup backend

- cd backend
- npm install

# .evn 

- PORT=5000
- MONGODB_URL="mongodb://localhost:27017/Canvas"
- SECRET_KEY=Aady--
- CLOUD_NAME=dapqfzdjf
- API_KEY=339976772928962
- API_SECRET=9XO6BzGMgqqR0Tlt8mC4AwjB5Q8

# run

- npm run dev

## setup frontend

- cd ../frontend
- npm install
- npm run dev

## API

public 

- http://localhost:5000/api/v1/user/register (for signup) Post type.
- http://localhost:5000/api/v1/user/login (for login) Post type.
- http://localhost:5000/api/v1/user/logout (for logout) get type.
- http://localhost:5000/api/v1/file/files (for all product) get type.

Protected (Admin only):
 
 -  http://localhost:5000/api/v1/file/upload (for upload product) post type.
