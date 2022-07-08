import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Invoices } from "./pages/Invoices";
import { Expenses } from "./pages/Expenses";
import { LandingPage } from "./pages/Landing/LandingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
