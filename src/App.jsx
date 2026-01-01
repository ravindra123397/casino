import React from "react";
import { Routes, Route } from "react-router-dom";

import LoanApplicationfrom from "./Component/LoanApplicationForm";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import AdminDashboard from "./page/AdminDashboard";
import ScrollToTop from "./Component/ScrollToTop";

import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";
import AdminLayout from "./layout/AdminLayout";

import "./App.css";
import LoanProfile from "./Component/LoanProfile";
import FirstVisitPopup from "./Component/FirstVisitPopup";


function App() {
  return (
    <>
      <ScrollToTop />
       <FirstVisitPopup />
      <Routes>
       
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-form" element={<LoanApplicationfrom />} />
        <Route path="/profile" element={<LoanProfile />} />

       
        {/* AUTH */}
        <Route element={<PublicRoute />}>
          <Route path="/admin/login" element={<Login />} />
        </Route>

        {/* ADMIN PRIVATE */}
        <Route element={<PrivateRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
