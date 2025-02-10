import React from "react";
import "./Register.css"

const Register=()=>{
    return(
        <div className="register-container">
            <div className="register-wrapper">
                <form action="">
                    <h1>Create Your Account</h1>
                    <div className="input-box">
                        <input type="text"  placeholder="username"/>
                    </div>
                    <div className="input-box">
                        <input type="password"  placeholder="password"/>
                    </div>
                    <div className="input-box">
                        <input type="email"  placeholder="E-Mail"/>
                    </div>
                    <div className="input-box">
                        <input type="tel"  placeholder="Phone Number"/>
                    </div>
                    <div className="input-box">
                        <input type="text"  placeholder="Country"/>
                    </div>
                    <div className="register-agreement">
                        <label>
                        <input type="checkbox" /> I agree to the <b>Terms</b> and <b>Privacy Policies</b>
                        </label>
                    </div>
                    <button className="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}
export default Register