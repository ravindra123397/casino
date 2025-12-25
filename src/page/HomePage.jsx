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
    <div className="">
      <Navbar />

      {/* HOME */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* WAIT 24 HOURS */}
      <section id="wait-24-hours">
        <DownloadAppSection />
      </section>
      {/* EXCHANGE */}
      <section id="cricket-section">
        <TopGames />
      </section>



      {/* LOAN */}
      <section id="loan">
        <LiveCasino />

      </section>

      <PaymentMethods />



      {/* LOAN DISBURSED */}
      <section
        id="loan-disbursed"
        className="bg-[#08131e] py-12 px-4 text-center "
      >
        {/* HEADING */}
        <p
          className="-mt-8 inline-block text-center
    text-red-600
    text-lg sm:text-xl md:text-2xl
    font-bold
    uppercase
    tracking-wide
    relative
    after:content-['']
    after:block
    after:w-16
    after:h-[3px]
    after:bg-red-600
    after:mx-auto
    after:mt-2"
        >
          Why Choose Sawariya  SETH BOOK
        </p>

        {/* FEATURES LIST */}
        <div className="mt-8 max-w-xl mx-auto space-y-3 text-gray-200 text-sm sm:text-base">

          <p>⚡ Instant loan approval for online players</p>

          <p>💰 Loan amount available up to <span className="text-red-400 font-semibold">₹50,000</span></p>

          <p>🚀 Fast and smooth disbursal process</p>

          <p>📅 Easy daily / flexible repayment options</p>

          <p>📄 No lengthy paperwork or delays</p>

          <p>🔗 Works with all major online books & platforms</p>

          <p>🔒 Trusted, secure & transparent system</p>

          <p>🕒 24×7 support for active players</p>

        </div>
      </section>


      <CasinoInfoContent />


      {/* PROCESSING FEES */}
      <section id="processing-fees"></section>

      {/* MOBILE TABS */}
      <MobileTabs />
    </div>
  );
};

export default HomePage;
