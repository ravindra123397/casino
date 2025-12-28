import React from "react";
import { useNavigate } from "react-router-dom";

const GetloanButton = () => {
  const navigate = useNavigate();

  // 🔴 PLAY CASINO ON LOAN
  const handleLoanClick = () => {
    navigate("/complete-form");
  };

  // ⚪ TAKE ID DIRECTLY (WhatsApp)
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=15558570977&text=I%20want%20to%20play%20on%20your%20exchange",
      "_blank"
    );
  };

  return (
    <div className="md:hidden flex justify-center px-4">
      <div className="flex flex-col items-center gap-2">

        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          {/* 🔴 PLAY CASINO ON LOAN */}
          <button
            onClick={handleLoanClick}
            className="
              inline-flex items-center justify-center
              px-6 py-4
              whitespace-nowrap
              font-bold text-base
              text-white
              bg-red-600
              shadow-lg
              transition-all duration-300
              hover:scale-105
              active:scale-95
              rounded-xl
              cursor-pointer
            "
          >
            Play Casino on Loan
          </button>

          {/* ⚪ TAKE ID DIRECTLY */}
          <button
            onClick={handleWhatsAppClick}
            className="
              inline-flex items-center justify-center
              px-5 py-4
              whitespace-nowrap
              font-bold text-base
              text-red-600
              border-2 border-white
              bg-transparent
              rounded-xl
              cursor-pointer
              transition-all duration-300
              hover:bg-white hover:text-red-600
            "
          >
            Take ID Directly
          </button>
        </div>

        {/* 🔹 WHATSAPP MIS / HINT */}
        <p className="text-xs text-green-500 font-semibold mt-1">
          💬 Connect on WhatsApp for instant ID
        </p>
      </div>
    </div>
  );
};

export default GetloanButton;
