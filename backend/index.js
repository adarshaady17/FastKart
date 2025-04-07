const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

const cors = require("cors");

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Routes
const fileRoute = require("./routes/FileRoute");
const userRoute = require("./routes/userRoute");

app.use("/api/v1/file", fileRoute);
app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
