import React from "react";
import background from "../assets/Take.gif";
import PlayCasinoLoanButton from "./PlayCasinoLoanButton";
import { useNavigate } from "react-router-dom";

const DownloadAppSection = () => {
  const navigate = useNavigate();

  // 🔴 Loan form navigation
  const handleLoanClick = () => {
    navigate("/complete-form");
  };

  // ⚪ WhatsApp connect
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=15558570977&text=I%20want%20to%20play%20on%20your%20exchange",
      "_blank"
    );
  };
  return (
    <section className="w-full bg-[#0b1622] py-20 px-4 ">
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
        <div className="mt-7">
          <PlayCasinoLoanButton
            onClick={handleLoanClick}
            onWhatsAppClick={handleWhatsAppClick}
          />
        </div>

      </div>
    </section>
  );
};

export default DownloadAppSection;
