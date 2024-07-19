import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthStatusProvider from "./Context/Usecontext.jsx";

ReactDOM.render(
  <AuthStatusProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </AuthStatusProvider>,
  document.getElementById("root")
);
