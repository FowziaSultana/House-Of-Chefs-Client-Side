import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes></Routes>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
