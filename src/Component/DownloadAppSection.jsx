import React from "react";
import { Apple, Play } from "lucide-react";
import background from "../assets/Take.gif"

const DownloadAppSection = () => {
  return (
    <section className="w-full bg-[#0b1622] py-10 px-4">
      <div
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden
                   bg-gradient-to-r from-[#0b1622] via-[#0b1622] to-[#b8931d]"
      >
        {/* Background texture */}
        <div 
         style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0  bg-cover bg-center opacity-20" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 md:p-12">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              DOWNLOAD NOW
            </h2>
            <h1 className="text-yellow-400 text-3xl md:text-4xl font-extrabold mt-1">
              RAJABETS APP
            </h1>

            {/* STORE BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              {/* 🍎 APP STORE */}
              <button
                className="group flex items-center gap-3 px-7 py-4 rounded-xl
                           bg-[#f5b90b] text-black
                           hover:bg-[#f5b90b]
                           transition-all duration-300 shadow-lg cursor-pointer"
              >
                <Apple className="text-black" size={28} />
                <div className="text-left leading-tight">
                  <p className="text-xs font-medium">Get it on</p>
                  <p className="font-bold text-lg">App Store</p>
                </div>
              </button>

              {/* ▶ GOOGLE PLAY */}
              <button
                className="group flex items-center gap-3 px-7 py-4 rounded-xl
                            border border-white/30
                           bg-[#f5b90b] text-black
                           hover:bg-[#f5b90b]
                           transition-all duration-300 cursor-pointer"
              >
                <Play className="text-white" size={28} />
                <div className="text-left leading-tight">
                  <p className="text-xs text-gray-300">Get it on</p>
                  <p className="text-white font-semibold text-lg">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>

         
        </div>
      </div>

      {/* 🔥 CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes phoneFloat {
            0% { transform: translateX(0); }
            50% { transform: translateX(20px); }
            100% { transform: translateX(0); }
          }
          .animate-phoneFloat {
            animation: phoneFloat 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default DownloadAppSection;
