import React, { useEffect, useState } from "react";
import {
    Swords,
    Trophy,
    Dice5,
    Club,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

/* 🔥 Slider Images */
const slides = [
    "https://res.cloudinary.com/monotech/image/upload/h_500,c_limit/v1765716601/rajabets/cms/2368c35e-e1ac-4c1a-9340-01115f31c33a.jpg",
    "https://res.cloudinary.com/monotech/image/upload/h_500,c_limit/v1683995030/rajabets/cms/653b8d05-45ea-4684-a4cc-e41281fb7954.jpg",
    "https://res.cloudinary.com/monotech/image/upload/h_500,c_limit/v1751625848/rajabets/cms/87d986b3-26d8-4528-a467-6f6ad0872d65.jpg",
];

/* 🔥 Overlay Cards */
const cards = [
    {
        title: "Cricket Bets",
        action: "Show Bets",
        icon: <Swords className="text-yellow-400" size={26} />,
    },
    {
        title: "Sport Bets",
        action: "Show Bets",
        icon: <Trophy className="text-yellow-400" size={26} />,
    },
    {
        title: "Casino",
        action: "Show Games",
        icon: <Dice5 className="text-yellow-400" size={26} />,
    },
    {
        title: "Live Casino",
        action: "All Live Games",
        icon: <Club className="text-yellow-400" size={26} />,
    },
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
        <div className="relative w-full overflow-hidden">

            {/* 🔥 SLIDER */}
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px]">

                {/* Images */}
                {slides.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Banner"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

                {/* 🔥 RIGHT BOTTOM CONTROLS (ARROWS + DOTS) */}
                <div className="absolute bottom-24 right-6 z-30 flex items-center gap-3">

                    {/* ⬅ Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="text-white hover:text-yellow-400 transition"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`transition-all duration-300 ${current === index
                                        ? "w-10 h-2 bg-yellow-400 rounded-full"
                                        : "w-2 h-2 bg-white/70 rounded-full"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* ➡ Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="text-white hover:text-yellow-400 transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* 🔥 OVERLAY CARDS */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 z-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 px-6 py-5 rounded-2xl 
                   bg-[#0b1a2a] shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                   hover:bg-[#0e2238] transition"
                            >
                                {/* 🔥 ICON BOX */}
                                <div className="min-w-[56px] h-[56px] flex items-center justify-center 
                        rounded-xl bg-[#12263d]">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>

                                {/* 🔥 TEXT */}
                                <div className="leading-tight">
                                    <h4 className="text-white font-semibold text-base">
                                        {item.title}
                                    </h4>
                                    <p className="text-yellow-400 text-sm mt-1">
                                        {item.action} →
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroSlider;
