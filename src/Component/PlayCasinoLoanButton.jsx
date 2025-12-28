import React from "react";

const PlayCasinoLoanButton = ({ onClick, onWhatsAppClick }) => {
  return (
    <div className="md:hidden flex justify-center px-4">
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
    </div>
  );
};

export default PlayCasinoLoanButton;
  