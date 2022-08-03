import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzzp3YwRhuDlEcHkMr8U4drLAIy5pEzuY",
  authDomain: "coder-house---ecommerce.firebaseapp.com",
  projectId: "coder-house---ecommerce",
  storageBucket: "coder-house---ecommerce.appspot.com",
  messagingSenderId: "747974460011",
  appId: "1:747974460011:web:35897781a4ea78fff8e72e"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const db = getFirestore(app);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
