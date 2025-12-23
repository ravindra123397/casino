import React from "react";

const GetloanButton = ({ onClick }) => {
    return (
        <div className="md:hidden flex justify-center  ">
            <button
                onClick={onClick}
                className="
          inline-flex items-center justify-center
          px-6 py-4
          font-bold text-lg
          text-white
          bg-red-600
          shadow-lg
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-2xl
          active:scale-95
          
          rounded-xl
        "
            >
                Get your loan now
            </button>
        </div>
    );
};

export default GetloanButton;
