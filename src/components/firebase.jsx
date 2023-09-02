/**
 * @copyright Copyright 2023 CRAZY DIAMOND PTE LTD. All rights reserved.
 * @see Crazy Diamond: https://github.com/CrazyDiamondGarage
 * @see GenWorld: https://genworld.io/
 * @author endaye
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLE4PaJKf7hD7cRs8sl-8xTEywfzb9QTw",
  authDomain: "genworld-388f1.firebaseapp.com",
  projectId: "genworld-388f1",
  storageBucket: "genworld-388f1.appspot.com",
  messagingSenderId: "31552747064",
  appId: "1:31552747064:web:d5ba78407e1fa6d0c518cd",
  measurementId: "G-17QRP5YLWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };
