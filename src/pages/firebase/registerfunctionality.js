import { database, ref, push } from "./firebase";

export const registerUser = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const userData = {
        username: form[0].value,
        password: form[1].value,
        email: form[2].value,
        phone: form[3].value,
        country: form[4].value,
        agreement: form[5].checked
    };

    
    if(!userData.username){
        alert("Please enter a username.");
        return
    }
    else if(!userData.password){    
        alert("Please enter a password.");
        return
    }   
    else if(!userData.email){
        alert("Please enter an email.");
        return
    }
    else if(!userData.phone){
        alert("Please enter a phone number.");
        return
    }
    else if(!userData.country){
        alert("Please enter a country.");
        return
    }
    else{
        if(!userData.agreement){
            alert("You must agree to the terms and privacy policies.");
            return;
        }
    }

    push(ref(database, "users"), userData)
        .then(() => {
            alert("Registration successful!");
            form.reset();
        })
        .catch((error) => {
            console.error("Error registering user:", error);
        });
};
