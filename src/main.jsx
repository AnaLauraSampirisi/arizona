import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBdOFYzIIOiPwsHuPOFyRU9l9NVcKacDaM",
    authDomain: "arizona-ad3eb.firebaseapp.com",
    projectId: "arizona-ad3eb",
    storageBucket: "arizona-ad3eb.appspot.com",
    messagingSenderId: "376026732582",
    appId: "1:376026732582:web:f4e18318084379f06c2ee7"
  };

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
