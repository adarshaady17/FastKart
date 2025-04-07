// Correct: no <BrowserRouter> here
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import Home from "./components/Home";
import ProductPage from "./components/ui/ProductPage";
import CreateListing from "./components/ui/createpage";
import ProductItemPage from "./components/ui/productitem";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductPage />} />
        <Route path="/create" element={<CreateListing />} />
        <Route path="/product/:id" element={<ProductItemPage />} />

      </Routes>
    </>
  );
}

export default App;
