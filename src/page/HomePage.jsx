import React from "react";
import Navbar from "../Component/Navbar";
import HeroSlider from "../Component/HeroSlider";
import DownloadAppSection from "../Component/DownloadAppSection";
import TopGames from "../Component/TopGames";
import LiveCasino from "../Component/LiveCasino";
import CasinoInfoContent from "../Component/CasinoInfoContent";
import PaymentMethods from "../Component/PaymentMethods";
import MobileTabs from "../Component/MobileTabs";
import PlayCasinoLoanButton from "../Component/PlayCasinoLoanButton";
import Mahakal from "../Component/Mahakal";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* WAIT 24 HOURS */}
      <section id="wait-24-hours">
        <DownloadAppSection />
      </section>

      <PlayCasinoLoanButton />

      {/* EXCHANGE */}
      <section id="exchange">
        <TopGames />
      </section>

      <PaymentMethods />

      {/* LOAN */}
      <section id="loan">
        <LiveCasino />
        <PlayCasinoLoanButton />
      </section>

      <Mahakal />

      {/* LOAN DISBURSED */}
      <section id="loan-disbursed">
        <CasinoInfoContent />
      </section>

      {/* PROCESSING FEES */}
      <section id="processing-fees"></section>

      {/* MOBILE TABS */}
      <MobileTabs />
    </>
  );
};

export default HomePage;
