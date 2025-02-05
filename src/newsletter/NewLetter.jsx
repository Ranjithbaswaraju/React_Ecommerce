
import React from "react";
import "./NewLetter.css"
import { IoMdSend } from "react-icons/io";

const NewsLetter=()=>{
    return(
        <div className="newsletter-container">
            <h1 className="newsletter-title">Newsletter</h1>
            <div className="newsletter-desc">What's Fresh and New : Updates You Don't Want to Miss</div>
            <div className="input-container">
                <input className="newsletter-input" placeholder="Your Email"/>
                <div className="newsletter-button">
                    <IoMdSend className="icon"/>
                </div>
            </div>

        </div>
    )
}
export default NewsLetter