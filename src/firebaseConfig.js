import { initializeApp } from "firebase/app";
// import uploadData from "upload-json-mock-firebase";
// import { products } from "./productsMock.js";
import { getFirestore } from "firebase/firestore";
// const data = products;

const firebaseConfig = {
    apiKey: "AIzaSyDA5fNYXnsKxceYF1rSBPG7TWcVZzIKLPk",
    authDomain: "curso-react-6e56c.firebaseapp.com",
    projectId: "curso-react-6e56c",
    storageBucket: "curso-react-6e56c.appspot.com",
    messagingSenderId: "278286628554",
    appId: "1:278286628554:web:c3883e4f3c9fa36af72633"
};

// const collectionName = "products";

// uploadData(firebaseConfig, data, collectionName);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);