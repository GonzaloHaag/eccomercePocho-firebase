import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVIKmVZmee565iZKnGYk0Vkh6zpEz44ug",
  authDomain: "elpocho-eccomerce.firebaseapp.com",
  projectId: "elpocho-eccomerce",
  storageBucket: "elpocho-eccomerce.appspot.com",
  messagingSenderId: "792249841241",
  appId: "1:792249841241:web:c4993431e13bd332602348"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);