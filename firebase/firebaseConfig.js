import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB593ZS1K3fKnt52lWAgGP9xdV8VW2Sgs0",
  authDomain: "pos-system-ce3b5.firebaseapp.com",
  databaseURL: "https://pos-system-ce3b5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pos-system-ce3b5",
  storageBucket: "pos-system-ce3b5.appspot.com",
  messagingSenderId: "492333057399",
  appId: "1:492333057399:web:c963e48319184cffd14d72",
  measurementId: "G-G6WNB2JQ9D"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);

  export{app};