import React, { useEffect, useState } from "react";
import {
  Swords,
  Trophy,
  Dice5,
  Club,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* Slider Images */
import imagge1 from "../assets/1.png";
import imagge2 from "../assets/2.png";
import imagge3 from "../assets/3.png";
import imagge4 from "../assets/4.png";
import imagge5 from "../assets/5.png";

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

  /* 🔁 Auto Slide */
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
    <section className="relative w-full overflow-visible ">
      {/* SLIDER */}
      <div className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px] overflow-hidden">

        {/* IMAGES */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* CONTROLS (DESKTOP) */}
        <div className="hidden sm:flex absolute bottom-24 right-6 z-30 items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/40 text-white hover:text-yellow-400"
          >
            <ChevronLeft size={22} />
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all ${current === i
                  ? "w-8 h-2 bg-yellow-400 rounded-full"
                  : "w-2 h-2 bg-white/60 rounded-full"
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
      </div>

      {/* OVERLAY CARDS (IMAGE MATCHING) */}
      <div className="absolute -translate-y-7 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">

          {cards.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-4 py-4
      rounded-xl bg-[#0b1a2a]
      hover:bg-[#0e2238]
      shadow-xl transition-all duration-300 hover:-translate-y-1
      ${index > 1 ? "hidden sm:flex" : "flex"}`}
            >
              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center
      rounded-lg bg-[#12263d]">
                {React.cloneElement(item.icon, {
                  size: 20,
                  className: "text-yellow-400",
                })}
              </div>

              {/* Text */}
              <div>
                <h4 className="text-white text-sm sm:text-base font-semibold">
                  {item.title}
                </h4>
                <p className="text-yellow-400 text-xs sm:text-sm">
                  {item.action}
                </p>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
