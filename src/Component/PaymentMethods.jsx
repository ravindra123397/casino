import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/Exchange1.png"
import image2 from "../assets/Exchange2.png"
import image3 from "../assets/Exchange3.png"
import image4 from "../assets/Exchange4.png"
import image5 from "../assets/Exchange5.png"
import image6 from "../assets/Exchange6.png"
import image7 from "../assets/Exchange7.png"
import image8 from "../assets/Exchange8.png"
import image9 from "../assets/Exchange9.png"
const payments = [
  { name: "Tether", logo: image1 },
  { name: "Paytm", logo: image2 },
  { name: "UPI", logo: image3 },
  { name: "RuPay", logo: image4 },
  { name: "AstroPay", logo: image5 },
  { name: "Net Banking", logo: image6 },
  { name: "PhonePe", logo: image7 },
  { name: "Google Pay", logo: image8 },
  { name: "Mastercard", logo: image9 },
];

const PaymentMethods = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollRight = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 180, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -180, behavior: "smooth" });
  };

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    intervalRef.current = setInterval(scrollRight, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () =>
    (intervalRef.current = setInterval(scrollRight, 2500));

  return (
    <section className="w-full   ">
      <div className=" relative">

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 rounded-full bg-[#102435]
                     flex items-center justify-center
                     text-gray-300 hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="flex gap-6 overflow-x-auto scrollbar-hide
                      rounded-xl px-12 py-4 scroll-smooth"
        >
          {[...payments, ...payments].map((item, index) => (
            <div
              key={index}
              className="min-w-[120px] h-[48px]
                         flex items-center justify-center
                          rounded-lg
                         hover:bg-[#162f46] transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 rounded-full bg-[#102435]
                     flex items-center justify-center
                     text-gray-300 hover:text-white"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default PaymentMethods;
