// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,

// )

// When we first install using `create vite @latest`, the default boilerplate code in `main.jsx` is already present. 
// However, it shows an error where ReactDOM is unable to identify it.

// ------------SO THE CORRECT main.jsx code---------------------------


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this is present
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
<App />
);






