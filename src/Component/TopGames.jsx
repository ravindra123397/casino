import React from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const games = [
  {
    title: "CHICKEN ROAD 2",
    provider: "INOUT",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1760516503/rajabets/game/37310057-7dee-459b-bbc9-fa2c88b7ecf4.jpg",
  },
  {
    title: "AVIATOR",
    provider: "SPRIBE",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1742291781/rajabets/game/0645ec2d-9ec2-4909-b148-52706d55a9ca.jpg",
  },
  {
    title: "JETX",
    provider: "SMARTSOFT",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1764918685/rajabets/game/0a3088b2-b4b3-43ac-a245-4ff231843f1e.jpg",
  },
  {
    title: "ICE AGE ROYAL",
    provider: "MONOPLAY",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1742292185/rajabets/game/580d56cf-e61c-4fb6-98fa-24cd7df38afd.jpg",
  },
  {
    title: "DIVER",
    provider: "INOUT",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1764075858/rajabets/game/975aada1-eb7d-4a36-91a1-099bb3dbdb82.jpg",
  },
  {
    title: "AVIATRIX",
    provider: "AVIATRIX",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1742292253/rajabets/game/24d115c6-d3a9-4ada-8ebf-e0ca5eade507.jpg",
  },
  {
    title: "MONEY COMING",
    provider: "JILI GAME",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1742292341/rajabets/game/f3ef01fd-993a-4354-946f-c2a9769757a3.jpg",
  },
  {
    title: "BIG BASS BONANZA",
    provider: "PRAGMATIC PLAY",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1757063264/rajabets/game/7b8d9c80-8250-47a1-8a98-6af1a6caaefc.jpg",
  },
  {
    title: "PIRATES PARTY",
    provider: "NETENT",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1757063455/rajabets/game/e9fd11d0-8b1b-48bd-9c73-cb35ffeb7c44.jpg",
  },
  {
    title: "ITERO",
    provider: "HACKSAW",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1757063502/rajabets/game/ed03f4d6-24ca-439f-9220-6d5590929a55.jpg",
  },
  {
    title: "GONZO'S QUEST",
    provider: "RED TIGER",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1764918772/rajabets/game/5dace02c-2d04-4836-accf-9485a86744fc.jpg",
  },
  {
    title: "CRICKETX",
    provider: "SMARTSOFT",
    image:
      "https://res.cloudinary.com/monotech/image/upload/w_400/v1757063580/rajabets/game/8c230877-cd7b-4020-9595-9e57a0fe7575.jpg",
  },
];

const TopGames = () => {
  return (
    <section className="w-full bg-[#08131e] py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">Top Games</h2>

          
        </div>

        {/* GAMES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden
                         bg-[#0f1e2e] cursor-pointer
                         hover:scale-105 transition-transform duration-300"
            >
              {/* Favorite Icon */}
              <button className="absolute top-3 right-3 z-10 text-white/70 hover:text-yellow-400">
                <Heart size={18} />
              </button>

              {/* Image */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-[200px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

              {/* Text */}
              <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white text-sm font-semibold leading-tight">
                  {game.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  {game.provider}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopGames;
