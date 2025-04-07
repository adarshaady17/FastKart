import React, { useState } from "react";
//import Navbar from "./shared/navbar";
import ProductPage from "./ui/ProductPage";
const Home = () => {
//   const [image,setImage]=useState("");
//   const [price,setPrice]=useState("");
//   const [description,setDescription]=useState("");
//   const [imgNsme,setImgName]=useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/v1/getAllFiles", {
//         email,
//         subject,
//         text,
//       });

//       if (res.data.success === true) {
//         toast.success(res.data.message);
//         navigate("/Success")
//       } else {
//         toast.error("Something went wrong!");
//       }

//       console.log("Email sent successfully:", res.data);
//     } catch (err) {
//       console.log("Error sending email:", err);

//       if (err.response && err.response.data) {
//         toast.error(err.response.data.message || "Email sending failed.");
//       } else {
//         toast.error("Network error or server is down.");
//       }
//     }
//   };

   return (
//     <div>
//     <form>
//     <div>
//         <img/>
//       </div>
//       <div>
//         <h1></h1>
//         <p></p>
//         <p></p>
//       </div>
//     </form>
//     </div>
    <div>
      {/* <Navbar /> */}
      <ProductPage />
      
    </div>
  )
}

export default Home;