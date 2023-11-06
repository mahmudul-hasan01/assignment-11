import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7cEr-_snNqJP2Cq0j9pCcOifzv6NIGBs",
  authDomain: "assignment-11-947ba.firebaseapp.com",
  projectId: "assignment-11-947ba",
  storageBucket: "assignment-11-947ba.appspot.com",
  messagingSenderId: "1003744393025",
  appId: "1:1003744393025:web:c61358e42ad0d34c25d3c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

