import React from "react";
import { createRoot } from "react-dom/client"; // Adjusted import path
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./DarkModeContext";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <>
  <ThemeProvider>
    <App />
    <ToastContainer />
    </ThemeProvider>
  </>
);
