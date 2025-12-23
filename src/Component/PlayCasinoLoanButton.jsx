import React from "react";

const PlayCasinoLoanButton = ({ onClick }) => {
  return (
    <div className="md:hidden flex justify-center bg-black ">
      <button
        onClick={onClick}
        className="
          inline-flex items-center justify-center
          px-6 py-4
          font-bold text-lg
          text-white
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
          shadow-lg
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-2xl
          active:scale-95
          animate-pulse
          rounded-xl
        "
      >
        Play Casino on Loan
      </button>
    </div>
  );
};

export default PlayCasinoLoanButton;
