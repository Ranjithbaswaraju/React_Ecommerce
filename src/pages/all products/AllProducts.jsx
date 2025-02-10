import React from "react";
import Navbar from "../../navbar/Navbar";
import { allProducts } from "../../data";
import Products from "../../products/Products";
import Footer from "../../footer/Footer";

const AllProducts = () => {
    return(
        <div>
            <Navbar/>
            <Products heading="Products" items={allProducts}/>
            <Footer/>
        </div>
    )
}
export default AllProducts