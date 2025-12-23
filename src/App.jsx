import React from "react";
import { Routes, Route } from "react-router-dom";
import LoanApplicationfrom from "./Component/LoanApplicationForm";
import HomePage from "./page/HomePage";
import "./App.css";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <>
      {/* 🔝 SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* COMPLETE FORM PAGE */}
        <Route path="/complete-form" element={<LoanApplicationfrom />} />
      </Routes>
    </>
  );
}

export default App;
