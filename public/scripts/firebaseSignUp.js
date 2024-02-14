import { auth } from "../../firebase/firebaseServices.js"; // get initialized auth
import { analytics } from "../../firebase/firebaseServices.js"; // get initialized analytics

//get auth functionalities
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

// console.log(auth);

const register = ()=>{
    const userEmail = email.value;
    const userPassword = password.value;

    createUserWithEmailAndPassword(auth,userEmail,userPassword)
    .then((userCredential)=>{
        console.log(userCredential);
        console.log("user registered successfully!");
    }).catch((err)=>{
        console.log(err);
        console.log("user not registered!");
    });
}

btn.addEventListener("click",(event)=>{
    event.preventDefault(); // Prevent the form submitting

    console.log("submit button clicked!");
    register();

});