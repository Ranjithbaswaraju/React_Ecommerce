import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/login";
import AllProducts from "./pages/all products/AllProducts";
import SingleProduct from "./pages/singleProduct/SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
    </Router>
  );
};

export default App;
