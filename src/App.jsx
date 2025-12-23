import React from "react";
import { Routes, Route } from "react-router-dom";
import LoanApplicationfrom from "./Component/LoanApplicationForm"
import HomePage from "./page/HomePage";
import "./App.css";
function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route path="/" element={<HomePage />} />

      {/* COMPLETE FORM PAGE */}
      <Route path="/complete-form" element={<LoanApplicationfrom  />} />
    </Routes>
  );
}

export default App;
