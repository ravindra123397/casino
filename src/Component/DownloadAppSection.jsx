import React from "react";
import background from "../assets/Take.gif";
import PlayCasinoLoanButton from "./PlayCasinoLoanButton";

const DownloadAppSection = () => {
  return (
    <section className="w-full bg-[#0b1622] py-24 px-4 ">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">

        {/* FULL WIDTH IMAGE */}
        <img
          src={background}
          alt="Download App Banner"
          className="
            w-full 
            h-[120px] sm:h-[160px] md:h-[240px] lg:h-[320px]
            object-cover
            rounded-2xl
          "
        />
        <div className="mt-11">
          <PlayCasinoLoanButton />
        </div>

      </div>
    </section>
  );
};

export default DownloadAppSection;
