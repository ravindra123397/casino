// PlayCasinoLoanButton.jsx
import React from "react";

const PlayCasinoLoanButton = ({ onClick, onWhatsAppClick }) => {
  return (
    <div className="md:hidden flex justify-center px-4">
      <div className="flex flex-col items-center gap-2">

        {/* BUTTONS */}
        <div className="flex items-center gap-4">

          {/* 🔴 PLAY CASINO ON LOAN */}
          <button
            onClick={onClick}
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
            "
          >
            Play Casino on Loan
          </button>

          {/* ⚪ TAKE ID DIRECTLY */}
          <button
            onClick={onWhatsAppClick}
            className="
              inline-flex items-center justify-center
              px-5 py-4
              whitespace-nowrap
              font-bold text-base
              text-red-600
              border-2 border-white
              bg-transparent
              rounded-xl
              transition-all duration-300
              hover:bg-white hover:text-red-600
            "
          >
            Take ID Directly
          </button>

        </div>

        {/* 🔹 MIS TEXT */}
        <p className="text-xs text-green-500 font-semibold text-center">
          💬 Connect on WhatsApp for instant Casino ID
        </p>

      </div>
    </div>
  );
};

export default PlayCasinoLoanButton;
