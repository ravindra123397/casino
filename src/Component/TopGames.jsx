import React from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/TopGames1.png"
import image2 from "../assets/TopGames2.png"
import image3 from "../assets/TopGames3.png"
import image4 from "../assets/TopGames4.png"
const games = [
  {
    image: image1,
  },
  {

    image: image2,
  },
  {

    image: image3,
  },
  {

    image: image4,
  },

];

const TopGames = () => {
  return (
    <section className="w-full bg-[#0b1622] -mt-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">Play Casino on Credit</h2>


        </div>

        {/* GAMES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {games.map((game, index) => (
            <div
              key={index}
              className={`relative group rounded-xl overflow-hidden
        bg-[#0f1e2e] cursor-pointer
        hover:scale-105 transition-transform duration-300
        ${index >= 6 ? "hidden sm:block" : "block"}`}
            >
             

              {/* Image */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-[140px] sm:h-[200px] object-cover"
              />




            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
};

export default TopGames;
