import React, { useState } from "react";
import "./App.css";

import Navbar from "./Component/Navbar";
import HeroSlider from "./Component/HeroSlider";
import DownloadAppSection from "./Component/DownloadAppSection";
import TopGames from "./Component/TopGames";
import LiveCasino from "./Component/LiveCasino";
import LoanApplicationForm from "./Component/LoanApplicationForm";
import CasinoInfoContent from "./Component/CasinoInfoContent";
import PaymentMethods from "./Component/PaymentMethods";
import MobileTabs from "./Component/MobileTabs";

function App() {
  return (
    <>
      <Navbar />

      {/* TAB: Cricket */}
      <section id="cricket">
        <HeroSlider />
           {/* TAB: Wait of 24 Hours */}
      <section id="wait-24-hours">
        <DownloadAppSection />
      </section>
        <TopGames />
      </section>

      {/* TAB: Live Casino */}
      <section id="live-casino">
        <LiveCasino />
      </section>

      {/* TAB: Complete Form */}
      <section id="complete-form">
        <LoanApplicationForm />
      </section>

      {/* TAB: Loan Disbursed */}
      <section id="loan-disbursed">
        <CasinoInfoContent />
       
      </section>


   

      {/* MOBILE ONLY TABS */}
      <MobileTabs />
    </>
  );
}

export default App;
