import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const liveCasinoGames = [
  {
    title: "Funky Time",
    provider: "Evolution Gaming",
    image: "https://res.cloudinary.com/monotech/image/upload/w_240/v1634913829/rajabets/cms/2f45fc83-e888-4d81-8a19-205c9a2778d1.jpg",
  },
  {
    title: "XXXTreme Lightning Roulette",
    provider: "Evolution Gaming",
    image: "https://res.cloudinary.com/monotech/image/upload/w_240/v1641222121/rajabets/cms/021aa738-eb62-42b3-9342-334682109ab4.jpg",
  },
  {
    title: "Super Andar Bahar",
    provider: "Evolution Gaming",
    image: "https://res.cloudinary.com/monotech/image/upload/w_240/v1757064724/rajabets/cms/48e04089-8aae-4777-af27-d263678e0a43.jpg",
  },
  {
    title: "Dice Duel",
    provider: "BetGames",
    image: "https://res.cloudinary.com/monotech/image/upload/w_240/v1757064768/rajabets/cms/f0eccd78-2ddf-4033-8e53-50cf7d18f9c4.jpg",
  },
  {
    title: "Crazy Balls",
    provider: "Evolution Gaming",
    image: "https://res.cloudinary.com/monotech/image/upload/w_240/v1758705010/rajabets/cms/90dd1bda-6773-4019-8e2f-7888fa1d9348.jpg",
  },
  {
    title: "Monopoly Live",
    provider: "Evolution Gaming",
    image: "https://res.cloudinary.com/monotech/image/upload/w_240/v1660221909/rajabets/cms/fc9fde1a-f47b-4262-bba5-930b457ed384.png",
  },
];

const LiveCasinoSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const scrollRight = () => {
    if (!sliderRef.current || isHovering) return;
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (isHovering) return;
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    intervalRef.current = setInterval(scrollRight, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  const pauseAuto = () => clearInterval(intervalRef.current);
  const resumeAuto = () =>
    (intervalRef.current = setInterval(scrollRight, 3000));

  return (
    <section className="w-full bg-[#08131e] py-10 px-4">
      <div
        className={`mx-auto transition-all duration-700 ease-in-out
          ${isHovering ? "max-w-full" : "max-w-7xl"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-white text-2xl font-semibold uppercase">
            Live Casino
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className={`w-9 h-9 flex items-center justify-center rounded-md
              bg-[#102435] text-gray-300 hover:text-white
              ${isHovering ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={scrollRight}
              className={`w-9 h-9 flex items-center justify-center rounded-md
              bg-[#102435] text-gray-300 hover:text-white
              ${isHovering ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDER / EXPANDED VIEW */}
        <div
          ref={sliderRef}
         
          className={`transition-all duration-700 ease-in-out
            ${
              isHovering
                ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                : "flex gap-6 overflow-x-auto scrollbar-hide"
            }
            pb-6`}
        >
          {liveCasinoGames.map((game, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden bg-[#0f1e2e]
                cursor-pointer transition-all duration-700 ease-in-out
                ${
                  isHovering
                    ? "h-[260px]"
                    : "min-w-[220px] sm:min-w-[240px] md:min-w-[260px] hover:scale-105"
                }`}
            >
              {/* IMAGE */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveCasinoSlider;
