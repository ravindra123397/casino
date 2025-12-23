import React from "react";
import background from "../assets/logo5.png";

const DownloadAppSection = () => {
  return (
    <section className="w-full bg-[#0b1622] py-6 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
        
        {/* FULL WIDTH IMAGE */}
        <img
          src={background}
          alt="Download App Banner"
          className="
            w-full 
            h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px]
            object-cover
            rounded-2xl
          "
        />

      </div>
    </section>
  );
};

export default DownloadAppSection;
