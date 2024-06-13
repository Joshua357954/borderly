// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq--1vjizE4MQzQG3pdC2OGH6V3fepCAM",
  authDomain: "borderly-420b4.firebaseapp.com",
  projectId: "borderly-420b4",
  storageBucket: "borderly-420b4.appspot.com",
  messagingSenderId: "29191156936",
  appId: "1:29191156936:web:4062f7ca8cbcb12403e1fd",
  measurementId: "G-1TK5RVQGY5",
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
