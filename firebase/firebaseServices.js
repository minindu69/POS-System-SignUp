import { app } from "./firebaseConfig.js"; // file extension mandatory

//services
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"; // initialize auth
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js"; // initialize analytics

// Initialize Firebase Authentication and Analytics then get a reference to the service
const auth = getAuth(app);
// const auth = app.auth();
const analytics = getAnalytics(app);

console.log(auth);
console.log(analytics);

export{ auth, analytics };