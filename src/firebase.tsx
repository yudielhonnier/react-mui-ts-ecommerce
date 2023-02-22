import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO:pass this config to environment
const firebaseConfig = {
  apiKey: "AIzaSyDB9o7o08TwiNUHIqjEompeQ-j6Z49Zji0",
  authDomain: "firstreact-b498c.firebaseapp.com",
  projectId: "firstreact-b498c",
  storageBucket: "firstreact-b498c.appspot.com",
  messagingSenderId: "1017672198425",
  appId: "1:1017672198425:web:bfa46f49175ce3d068bd88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
