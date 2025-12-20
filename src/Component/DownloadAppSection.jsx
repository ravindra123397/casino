import React from "react";
import { Apple, Play } from "lucide-react";
import background from "../assets/Take.gif";

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
          className="absolute inset-0 bg-cover bg-center opacity-20"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 sm:p-8 md:p-12">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
              DOWNLOAD NOW
            </h2>
            <h1 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
              Sanwariya With Book 
            </h1>

            {/* STORE BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

              {/* 🍎 APP STORE */}
              <button
                className="flex items-center justify-center sm:justify-start gap-3 
                w-full sm:w-auto px-6 py-4 rounded-xl
                bg-[#f5b90b] text-black
                hover:brightness-110 transition-all duration-300 shadow-lg"
              >
                <Apple className="text-black" size={26} />
                <div className="text-left leading-tight">
                  <p className="text-xs font-medium">Get it on</p>
                  <p className="font-bold text-base sm:text-lg">
                    App Store
                  </p>
                </div>
              </button>

              {/* ▶ GOOGLE PLAY */}
              <button
                className="flex items-center justify-center sm:justify-start gap-3
                w-full sm:w-auto px-6 py-4 rounded-xl
                bg-black/30 border border-white/30
                hover:bg-black/40 transition-all duration-300"
              >
                <Play className="text-white" size={26} />
                <div className="text-left leading-tight">
                  <p className="text-xs text-gray-300">Get it on</p>
                  <p className="text-white font-semibold text-base sm:text-lg">
                    Google Play
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* RIGHT SIDE (optional image / phone mockup) */}
          <div className="hidden md:flex justify-center">
            {/* You can add phone image here later */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
