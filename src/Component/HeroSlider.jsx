// import React, { useEffect, useState } from "react";
// import {
//   Swords,
//   Trophy,
//   Dice5,
//   Club,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// /* Slider Images */
// import imagge1 from "../assets/1.png";
// import imagge2 from "../assets/2.png";
// import imagge3 from "../assets/3.png";
// import imagge4 from "../assets/4.png";
// import imagge5 from "../assets/5.png";

// const slides = [imagge1, imagge2, imagge3, imagge4, imagge5];

// /* Overlay Cards */
// const cards = [
//   { title: "Cricket", action: "Bets", icon: <Swords /> },
//   { title: "Sport", action: "Bets", icon: <Trophy /> },
//   { title: "Live", action: "Casino", icon: <Club /> },
//   { title: "Casino", action: "", icon: <Dice5 /> },
// ];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   /* 🔁 Auto Slide */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev + 1) % slides.length);

//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative w-full overflow-visible">
//       {/* ================= SLIDER ================= */}
//       <div className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px] overflow-hidden">
//         {slides.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="Banner"
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === current ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}

//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

//         {/* DESKTOP CONTROLS */}
//         <div className="hidden sm:flex absolute bottom-24 right-6 z-30 items-center gap-3">
//           <button
//             onClick={prevSlide}
//             className="p-2 rounded-full bg-black/40 text-white hover:text-red-600"
//           >
//             <ChevronLeft size={22} />
//           </button>

//           <div className="flex gap-2">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`transition-all ${
//                   current === i
//                     ? "w-8 h-2 bg-yellow-400 rounded-full"
//                     : "w-2 h-2 bg-white/60 rounded-full"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={nextSlide}
//             className="p-2 rounded-full bg-black/40 text-white hover:text-red-600"
//           >
//             <ChevronRight size={22} />
//           </button>
//         </div>
//       </div>

//       {/* ================= OVERLAY CARDS ================= */}
//       <div className="absolute left-0 w-full z-40 -translate-y-16 sm:-translate-y-7">
//         <div className="max-w-7xl mx-auto px-2">

//           {/* MOBILE → horizontal scroll | DESKTOP → grid */}
//           <div
//             className="
//               flex gap-2 overflow-x-auto pb-1
//               sm:grid sm:grid-cols-4 sm:gap-5 sm:overflow-visible
//               scrollbar-hide
//             "
//           >
//             {cards.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   min-w-[80px] sm:min-w-0
//                   bg-[#0b1a2a]
//                   rounded-lg
//                   flex flex-col sm:flex-row
//                   items-center justify-center sm:justify-start
//                   gap-1 sm:gap-3
//                   py-2 sm:py-4
//                   shadow-lg
//                   hover:bg-[#0e2238]
//                   transition-all duration-300
//                 "
//               >
//                 {/* Icon */}
//                 <div
//                   className="
//                     w-8 h-8 sm:w-11 sm:h-11
//                     flex items-center justify-center
//                     rounded-md bg-[#12263d]
//                   "
//                 >
//                   {React.cloneElement(item.icon, {
//                     size: 16,
//                     className: "text-red-600",
//                   })}
//                 </div>

//                 {/* Text */}
//                 <div className="text-center sm:text-left leading-tight">
//                   <h4 className="text-white text-[11px] sm:text-base font-semibold">
//                     {item.title}
//                   </h4>
//                   {item.action && (
//                     <p className="text-red-600 text-[9px] sm:text-sm">
//                       {item.action}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;


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
import imagge1 from "../assets/logo7.png";
import imagge2 from "../assets/2.png";
import imagge3 from "../assets/3.png";
import imagge4 from "../assets/4.png";
import imagge5 from "../assets/5.png";

const slides = [imagge1];

/* Overlay Cards */
const cards = [
  { title: "Cricket Bets", action: "Show Bets", icon: <Swords /> },
  { title: "Sport Bets", action: "Show Bets", icon: <Trophy /> },
  { title: "Casino", action: "Show Games", icon: <Dice5 /> },
  { title: "Live Casino", action: "All Live Games", icon: <Club /> },
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
    <section className="relative w-full overflow-visible">
      {/* ================= SLIDER ================= */}
      <div className="relative w-full h-[240px] sm:h-[360px] md:h-[460px] lg:h-[540px] overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* DESKTOP CONTROLS */}
        <div className="hidden sm:flex absolute bottom-28 right-6 z-30 items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/40 text-white hover:text-red-600"
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
            className="p-2 rounded-full bg-black/40 text-white hover:text-red-600"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ================= OVERLAY CARDS ================= */}
      <div className="absolute left-0 w-full z-40 -translate-y-4 sm:-translate-y-24">
        <div className="max-w-7xl mx-auto px-3">

          {/* MOBILE → SCROLL | DESKTOP → IMAGE STYLE GRID */}
          <div
            className="
              flex gap-2 overflow-x-auto pb-1
              sm:grid sm:grid-cols-4 sm:gap-6 sm:overflow-visible
              scrollbar-hide
            "
          >
            {cards.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[110px]
                  sm:min-w-0
                  bg-gradient-to-b from-[#0f2238] to-[#0b1a2a]
                  rounded-xl
                  flex flex-col sm:flex-row
                  items-center sm:items-center
                  justify-center sm:justify-start
                  gap-1 sm:gap-4
                  py-2 px-2
                  sm:py-6 sm:px-6
                  shadow-xl
                  hover:bg-[#0e2238]
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-8 h-8
                    sm:w-14 sm:h-14
                    flex items-center justify-center
                    rounded-lg
                    bg-[#12263d]
                  "
                >
                  {React.cloneElement(item.icon, {
                    size: 16,
                    className: "text-red-600 sm:size-[26px]",
                  })}
                </div>

                {/* Text */}
                <div className="text-center sm:text-left leading-tight">
                  <h4 className="text-white text-[11px] sm:text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-red-600 text-[9px] sm:text-sm mt-0.5">
                    {item.action} →
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
