import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./pages/context";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Here we use the Name Router instead of BrowserRouter
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
