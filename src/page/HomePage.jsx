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
        className="bg-[#08131e] py-10 px-4 text-center"
      >
        <p
          className="-mt-8
      inline-block
      text-yellow-400
      text-lg sm:text-xl md:text-2xl
      font-bold
      uppercase
      tracking-wide
      relative
      after:content-['']
      after:block
      after:w-16
      after:h-[3px]
      after:bg-gradient-to-r after:from-yellow-400 after:to-red-500
      after:mx-auto
      after:mt-2
    "
        >
          Why Choose SAWARLIYA SETH BOOK
        </p>

        
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
