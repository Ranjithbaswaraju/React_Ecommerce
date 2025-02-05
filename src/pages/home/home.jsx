import React from "react";
import Announcement from "../../announcement/Announcement";
import Navbar from "../../navbar/Navbar";
import Slider from "../../slider/Slider";
import Categories from "../../categories/Categories";
import Products from "../../products/Products";
import NewArrival from "../../products/NewArrival";
import Bestsellers from "../../products/BastSeller";
import NewsLetter from "../../newsletter/NewLetter";
import Footer from "../../footer/Footer";



const Home=()=>{
    return(
        <>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <NewArrival/>
            <Bestsellers/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
export default Home