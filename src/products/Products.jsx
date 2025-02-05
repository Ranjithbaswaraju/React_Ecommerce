import React from "react";
import "./Products.css"
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Products=({items,heading})=>{
    return(
        <div>
            <h1 className="heading">{heading}</h1>
            <div className="products-container">
                {
                    items.map((item)=>(
                        <div key={item.id} className="product-container">
                            <img src={item.img} alt="" className="product-image"/>
                            <div className="product-desc">
                                <h3>{item.title}</h3>
                                <span>${item.price}</span>
                            </div>

                            <div className="product-info">
                                <button className="icon">
                                    <CiShoppingCart /> Add To Cart
                                </button>

                                <button className="icon">
                                    <CiSearch/> View Details
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products