import React from "react";
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
  return (
    <section className="w-full bg-[#0b1622] -mt-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">
            Play Casino on Credit
          </h2>
        </div>

        {/* GAMES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {games.map((game, index) => (
            <a
              key={index}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl overflow-hidden
              bg-[#0f1e2e] cursor-pointer
              hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={game.image}
                alt="Casino Game"
                className="w-full h-[140px] sm:h-[200px] object-cover"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopGames;
