// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc6nN7gZZHhzxoib1H01Q1LLXZjCOb0vQ",
  authDomain: "email-password-auth-reca-c6d18.firebaseapp.com",
  projectId: "email-password-auth-reca-c6d18",
  storageBucket: "email-password-auth-reca-c6d18.appspot.com",
  messagingSenderId: "1033231218177",
  appId: "1:1033231218177:web:91bbb581496aed5a7ab200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app );

export default auth;