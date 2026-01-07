import React from "react";
import "./Navbar.css"
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../assets/logo.webp';
const Navbar=()=>{


    const cartItems=useSelector((state)=>state.cart.cartItems)

    const totalItems=cartItems.length
    return(
       <nav className="navbar-container">
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <span className="navbar-language">EN</span>
                
            </div>
           <Link to="/">
           <div className="navbar-center">
                <h1 className="navbar-logo">FEMME-CART<span></span></h1>
            </div>
           </Link>



            <div className="navbar-right">
                <Link to="/register">
                <div className="navbar-menuItem">Register</div></Link>
               <Link to="/login">
                    <div className="navbar-menuItem">Login</div>
               </Link>
                <Link to="/cart">
                <div className="navbar-menuItem">
                    <MdOutlineShoppingCart className="icon"/>
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </div>
                </Link>
                
            </div>
        </div>
       </nav>
    )
}
export default Navbar


