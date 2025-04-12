import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import prorouter from "./routes/pro.routes.js";
import UserRouter from "./routes/user.routes.js";


const app=express();
dotenv.config({});

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    origin: 'http://localhost:5173',
    credentials:true
}
 

app.use(cors(corsOptions));

const PORT=process.env.PORT || 5000;

//api
app.use("/api/v1/product",prorouter);
app.use("/api/v1/user",UserRouter);

app.listen(PORT,()=>{
    console.log(`sever is running at ${PORT}`);
})