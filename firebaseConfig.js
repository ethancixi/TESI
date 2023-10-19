// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB83Wvf3EJokj1o8gqDgertX3Pu853JX20",

  authDomain: "stepup-5118c.firebaseapp.com",

  projectId: "stepup-5118c",

  storageBucket: "stepup-5118c.appspot.com",

  messagingSenderId: "1006033825738",

  appId: "1:1006033825738:web:f9d6bbcce48382d0746933",

  measurementId: "G-5KY3CJEJ5V",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
