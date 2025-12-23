import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= SLIDER IMAGES ================= */
import image1 from "../assets/mahakal1.png";
import image2 from "../assets/mahaka2.png";
import image3 from "../assets/mahaka3.png";
import image4 from "../assets/mahaka4.png";
import image5 from "../assets/mahakal5.png";

/* ================= CARD IMAGES ================= */
import card1 from "../assets/mahakal1.png";
import card2 from "../assets/mahaka2.png";
import card3 from "../assets/mahaka3.png";
import card4 from "../assets/mahaka4.png";
import card5 from "../assets/mahakal5.png";
const slides = [image1, image2, image3, image4, image5];

const cards = [
  { image: card1 },
  { image: card2 },
  { image: card3 },
  { image: card4 },
  { image: card5 },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  /* 🔁 AUTO SLIDE */
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
    <section className="relative w-full overflow-visible">
      {/* ================= SLIDER ================= */}
      <div className="relative w-full h-[340px] sm:h-[360px] md:h-[460px] lg:h-[540px] overflow-hidden">
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

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* DESKTOP CONTROLS */}
        <div className="hidden sm:flex absolute bottom-28 right-6 z-30 items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/40 text-white hover:text-red-500"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all ${
                  current === i
                    ? "w-8 h-2 bg-yellow-400 rounded-full"
                    : "w-2 h-2 bg-white/60 rounded-full"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/40 text-white hover:text-red-500"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ================= IMAGE CARDS ================= */}
      <div className="absolute left-0 w-full z-40 -translate-y-4 sm:-translate-y-24">
        <div className="max-w-7xl mx-auto px-3">

          <div
            className="
              flex gap-3 overflow-x-auto pb-2
              sm:grid sm:grid-cols-4 sm:gap-6 sm:overflow-visible
              scrollbar-hide
            "
          >
            {cards.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[120px]
                  sm:min-w-0
                  rounded-xl
                  overflow-hidden
                  shadow-xl
                  bg-[#0b1a2a]
                  hover:scale-105
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <img
                  src={item.image}
                  alt="Card"
                  className="w-full h-[90px] sm:h-[160px] object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
