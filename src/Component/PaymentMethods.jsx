import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const payments = [
  { name: "Tether", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1616066094/rajabets/45f1d53c-3612-4b32-813a-5eb603d140db.svg" },
  { name: "Paytm", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1616066123/rajabets/636335cd-7047-472c-a503-821f94ef5e52.svg  " },
  { name: "UPI", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1616066143/rajabets/c4323fd9-a0ad-4896-969a-5d60250bbf75.svg" },
  { name: "RuPay", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1696350636/rajabets/cms/d59250a3-d0aa-47c9-ad6b-335f74ac3f5a.png" },
  { name: "AstroPay", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1696350662/rajabets/cms/10689be6-bc19-4190-b79e-0c89591d7f8a.png" },
  { name: "Net Banking", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1645460226/rajabets/cms/6e6e22f2-23e9-427a-bad7-a6250e593ec2.png" },
  { name: "PhonePe", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1645460247/rajabets/cms/e2c4426b-7acc-4336-968c-b926c34c1180.png" },
  { name: "Google Pay", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1696350693/rajabets/cms/9a4f7e2b-162a-424c-b673-aa4aa5a3f7d8.png" },
  { name: "Mastercard", logo: "https://res.cloudinary.com/monotech/image/upload/w_100/v1613818564/betibu/27c36b38-bf0f-42fa-a60f-f30fc6d86c4f.svg" },
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
    <section className="w-full bg-[#08131e] py-6 px-4">
      <div className="max-w-7xl mx-auto relative">

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
                     bg-[#0f1e2e] rounded-xl px-12 py-4 scroll-smooth"
        >
          {[...payments, ...payments].map((item, index) => (
            <div
              key={index}
              className="min-w-[120px] h-[48px]
                         flex items-center justify-center
                         bg-[#102435] rounded-lg
                         hover:bg-[#162f46] transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-6 object-contain"
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
