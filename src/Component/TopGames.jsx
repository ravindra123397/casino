import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

import image1 from "../assets/TopGames1.png";
import image2 from "../assets/TopGames2.png";
import image3 from "../assets/TopGames3.png";

const games = [
  {
    image: image1,
    link: "https://saffronexch247.com",
  },
  {
    image: image2,
    link: "https://allpenellexch.com",
  },
  {
    image: image3,
    link: "https://fairbet7.vip",
  },
];

const TopGames = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  /* 👁️ OBSERVER */
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
  });

  /* ➡️ SCROLL RIGHT */
  const scrollRight = () => {
    if (!sliderRef.current || isHovering) return;
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  /* ⬅️ SCROLL LEFT */
  const scrollLeft = () => {
    if (!sliderRef.current || isHovering) return;
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  /* 🔁 AUTO SLIDE (ONLY WHEN IN VIEW) */
  useEffect(() => {
    if (inView && !isHovering) {
      intervalRef.current = setInterval(scrollRight, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [inView, isHovering]);

  return (
    <section ref={sectionRef} className="w-full bg-[#0b1622] -mt-12 px-4">
      <div
        className={`mx-auto transition-all duration-700 ${
          isHovering ? "lg:max-w-full" : "max-w-7xl"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between px-2 mb-4">
          <h2 className="text-white text-2xl font-semibold uppercase">
            Play Casino on Credit
          </h2>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-[#102435] text-gray-300 hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={scrollRight}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-[#102435] text-gray-300 hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`
            flex gap-4 overflow-x-auto scrollbar-hide pb-6
            lg:${
              isHovering
                ? "grid grid-cols-6 gap-4 overflow-visible"
                : "flex"
            }
          `}
        >
          {games.map((game, index) => (
            <a
              key={index}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative rounded-xl overflow-hidden bg-[#0f1e2e]
                transition-all duration-500 block cursor-pointer
                min-w-[200px] sm:min-w-[230px] md:min-w-[250px]
                lg:${isHovering ? "h-[260px] min-w-0" : "hover:scale-105"}
              `}
            >
              <img
                src={game.image}
                alt={`game-${index}`}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGames;
