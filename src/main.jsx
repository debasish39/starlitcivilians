import React from "react";import ReactDOM from "react-dom/client";import AOS from "aos";import "aos/dist/aos.css";import App from "./App";import "./index.css";
AOS.init({duration:850,easing:"ease-out-cubic",offset:70,once:true});
ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);