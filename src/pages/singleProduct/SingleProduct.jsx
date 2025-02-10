import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "./SingleProduct.css"

const SingleProduct=()=>{

    const {id}=useParams()
    const product=allProducts.find((product)=>product.id==parseInt(id))

    const colors=["red","purple","teal","green","black"]
    const[selectedColor, setSelectedColor]=useState(null)
    const handleCircleClick=(color)=>{
        setSelectedColor(color)
    }
    const sizes=["xs","s","m","l","xl"]
    const[selectedSizes,setSelectedSizes]=useState(null)
    const handleSizeClick=(size)=>{
        setSelectedSizes(size)
    }

    return(
        <div className="singleProduct-container">
            <Navbar/>
            <div className="singleProduct-wrapper">
                <div className="singleProduct-imageSection">
                    <img src={product.img} alt="" className="singleProduct-image"/>
                </div>
                <div className="singleProduct-infoSection">
                    <h2 className="singleProduct-title">{product.title}</h2>
                    <p className="singleProduct-number">{product.price}</p>
                    <p className="description-title">Description</p>
                    <p className="singleProduct-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex excepturi eveniet maiores animi esse vitae dolorum repellendus modi debitis beatae corrupti doloribus omnis quasi aut nisi, quibusdam laboriosam nesciunt soluta.</p>
                    <div className="singleProduct-options">
                        <div className="colors-section">
                            <h4>Colors</h4>
                            <div className="colors">
                                {
                                    colors.map((color)=>(
                                        <div key={color} 
                                        className="color-circle" 
                                        style={{backgroundColor:color,outline:selectedColor==color?`3px solid ${color}`:""}}
                                        onClick={()=>handleCircleClick(color)}
                                        ></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="sizes-section">
                            <h4>Size</h4>
                            <div className="sizes">
                                {
                                    sizes.map((size)=>(
                                        <span key={size} style={{border:selectedSizes==size? "1px solid #ccc":""}} 
                                        onClick={()=>handleSizeClick(size)}>{size}</span>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className="addToCart">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer/>


        </div>
    )
}
export default SingleProduct