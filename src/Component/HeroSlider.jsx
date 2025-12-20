import React, { useEffect, useState } from "react";
import {
  Swords,
  Trophy,
  Dice5,
  Club,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import imagge1 from "../assets/1.png";
import imagge2 from "../assets/2.png";
import imagge3 from "../assets/3.png";
import imagge4 from "../assets/4.png";
import imagge5 from "../assets/5.png";

/* Slider Images */
const slides = [imagge1, imagge2, imagge3, imagge4, imagge5];

/* Overlay Cards */
const cards = [
  { title: "Cricket", action: "Bets", icon: <Swords /> },
  { title: "Sports", action: "Bets", icon: <Trophy /> },
  { title: "Casino", action: "Games", icon: <Dice5 /> },
  { title: "Live", action: "Casino", icon: <Club /> },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  /* 🔁 Auto Slide (Mobile + Desktop) */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">

      {/* SLIDER */}
      <div className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px]">

        {/* Images */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* CONTROLS (HIDDEN ON MOBILE) */}
        <div className="hidden sm:flex absolute bottom-20 right-4 z-30 items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/40 text-white hover:text-yellow-400"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots (Desktop only) */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all ${
                  current === i
                    ? "w-8 h-2 bg-yellow-400 rounded-full"
                    : "w-2 h-2 bg-white/70 rounded-full"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/40 text-white hover:text-yellow-400"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* OVERLAY CARDS */}
        <div className="absolute bottom-4 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-2 grid grid-cols-4 gap-2 sm:gap-4">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center
                gap-2 sm:gap-4 px-2 sm:px-4 py-3 rounded-lg
                bg-[#0b1a2a] hover:bg-[#0e2238]
                shadow-md transition text-center sm:text-left"
              >
                {/* Icon */}
                <div className="w-9 h-9 sm:w-12 sm:h-12
                  flex items-center justify-center
                  rounded-lg bg-[#12263d]">
                  {React.cloneElement(item.icon, {
                    size: 18,
                    className: "text-yellow-400",
                  })}
                </div>

                {/* Text */}
                <div className="leading-tight">
                  <h4 className="text-white text-[11px] sm:text-base font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-yellow-400 text-[10px] sm:text-sm">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
