// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE8Pgs5T40QkdYBjL6p7bs-i0wI6ypquI",
  authDomain: "holly-shakes.firebaseapp.com",
  projectId: "holly-shakes",
  storageBucket: "holly-shakes.appspot.com",
  messagingSenderId: "712673329159",
  appId: "1:712673329159:web:ba161793e9c583e6f7eaa2",
  measurementId: "G-V6Y75WTJEX"
};

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app_firebase;