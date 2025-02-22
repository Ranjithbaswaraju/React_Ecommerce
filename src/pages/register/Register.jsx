// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";
// import { database, ref, push } from "../firebase/firebase";

// const Register = () => {
//     const navigate = useNavigate(); // Hook for navigation

//     const registerUser = (event) => {
//         event.preventDefault();

//         const form = event.target;
//         const userData = {
//             username: form[0].value.trim(),
//             password: form[1].value.trim(),
//             email: form[2].value.trim(),
//             phone: form[3].value.trim(),
//             country: form[4].value.trim(),
//             agreement: form[5].checked
//         };

//         // Validate required fields
//         if (!userData.username) {
//             alert("Please enter a username.");
//             return;
//         }
//         if (!userData.password) {
//             alert("Please enter a password.");
//             return;
//         }
//         if (!userData.email) {
//             alert("Please enter an email.");
//             return;
//         }
//         if (!userData.phone) {
//             alert("Please enter a phone number.");
//             return;
//         }
//         if (!userData.country) {
//             alert("Please enter a country.");
//             return;
//         }
//         if (!userData.agreement) {
//             alert("You must agree to the terms and privacy policies.");
//             return;
//         }

//         push(ref(database, "users"), userData)
//             .then(() => {
//                 alert("Registration successful!");
//                 form.reset();
//                 setTimeout(() => {
//                     alert("Redirecting to login page...");
//                     navigate("../login"); // Ensure proper redirection
//                 }, 5000); 
//             })
//             .catch((error) => {
//                 console.error("Error registering user:", error);
//             });
//     };

//     return (
//         <div className="register-container">
//             <div className="register-wrapper">
//                 <form onSubmit={registerUser}>
//                     <h1>Create Your Account</h1>
//                     <div className="input-box">
//                         <input type="text" placeholder="Username" />
//                     </div>
//                     <div className="input-box">
//                         <input type="password" placeholder="Password" />
//                     </div>
//                     <div className="input-box">
//                         <input type="email" placeholder="E-Mail" />
//                     </div>
//                     <div className="input-box">
//                         <input type="tel" placeholder="Phone Number" />
//                     </div>
//                     <div className="input-box">
//                         <input type="text" placeholder="Country" />
//                     </div>
//                     <div className="register-agreement">
//                         <label>
//                             <input type="checkbox" /> I agree to the <b>Terms</b> and <b>Privacy Policies</b>
//                         </label>
//                     </div>
//                     <button className="submit">Create Account</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { database, ref, push } from "../firebase/firebase";

const Register = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        country: "",
        agreement: false,
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!formData.username.trim() || formData.username.length < 6) {
            newErrors.username = "Username must be at least 6 characters.";
        }
        if (!formData.password.trim() || !passwordRegex.test(formData.password)) {
            newErrors.password = "Password must be at least 6 characters and include uppercase, lowercase, a number, and a special character.";
        }
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!formData.country.trim()) {
            newErrors.country = "Country is required.";
        }
        if (!formData.agreement) {
            newErrors.agreement = "You must agree to the terms and privacy policies.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const registerUser = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        push(ref(database, "users"), formData)
            .then(() => {
                alert("Registration successful! Redirecting...");
                setTimeout(() => {
                    navigate("../login"); // Change to the actual next page route
                }, 3000);
            })
            .catch((error) => {
                console.error("Error registering user:", error);
                alert("Error registering user. Please try again.");
            });
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <form onSubmit={registerUser}>
                    <h1>Create Your Account</h1>

                    <div className="input-box">
                        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>

                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <div className="input-box">
                        <input type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="input-box">
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    <div className="input-box">
                        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                        {errors.country && <span className="error">{errors.country}</span>}
                    </div>

                    <div className="register-agreement">
                        <label>
                            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} /> I agree to the <b>Terms</b> and <b>Privacy Policies</b>
                        </label>
                        {errors.agreement && <span className="error">{errors.agreement}</span>}
                    </div>

                    <button className="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";
// import { database, ref, push } from "../firebase/firebase";
// import { auth, createUserWithEmailAndPassword } from "firebase/auth";


// const Register = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: "",
//         password: "",
//         email: "",
//         phone: "",
//         country: "",
//         agreement: false,
//     });

//     const [errors, setErrors] = useState({});

//     const validateForm = () => {
//         let newErrors = {};
//         if (formData.username.length < 6) newErrors.username = "Username must be at least 6 characters.";
//         if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(formData.password)) 
//             newErrors.password = "Password must be at least 6 characters, include 1 uppercase, 1 lowercase, and 1 special character.";
//         if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
//         if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = "Phone number must be at least 10 digits.";
//         if (!formData.country) newErrors.country = "Country is required.";
//         if (!formData.agreement) newErrors.agreement = "You must agree to the terms.";
//         return newErrors;
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     };

//     const registerUser = async (event) => {
//         event.preventDefault();
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         try {
//             // Register user in Firebase Authentication
//             const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//             const user = userCredential.user;

//             // Save user data in Firebase Realtime Database
//             await push(ref(database, "users"), { ...formData, uid: user.uid });

//             alert("Registration successful!");
//             navigate("/login"); 
//         } catch (error) {
//             console.error("Registration failed:", error.message);
//             alert("Registration failed. Try again.");
//         }
//     };

//     return (
//         <div className="register-container">
//             <div className="register-wrapper">
//                 <form onSubmit={registerUser}>
//                     <h1>Create Your Account</h1>
//                     <div className="input-box">
//                         <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
//                         {errors.username && <p className="error">{errors.username}</p>}
//                     </div>
//                     <div className="input-box">
//                         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//                         {errors.password && <p className="error">{errors.password}</p>}
//                     </div>
//                     <div className="input-box">
//                         <input type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} />
//                         {errors.email && <p className="error">{errors.email}</p>}
//                     </div>
//                     <div className="input-box">
//                         <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
//                         {errors.phone && <p className="error">{errors.phone}</p>}
//                     </div>
//                     <div className="input-box">
//                         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
//                         {errors.country && <p className="error">{errors.country}</p>}
//                     </div>
//                     <div className="register-agreement">
//                         <label>
//                             <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} /> I agree to the <b>Terms</b> and <b>Privacy Policies</b>
//                         </label>
//                         {errors.agreement && <p className="error">{errors.agreement}</p>}
//                     </div>
//                     <button className="submit">Create Account</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;
