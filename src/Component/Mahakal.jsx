import React from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/mahakal1.png"
import image2 from "../assets/mahaka2.png"
import image3 from "../assets/mahaka3.png"
import image4 from "../assets/mahaka4.png"
import image5 from "../assets/mahakal5.png"
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
 
   {

    image: image5,
  },

];

const Mahakal = () => {
   
    return (
        <section className="w-full bg-[#08131e] py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-semibold">Maha Season of Cricket</h2>


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
              {/* Favorite Icon */}
              <button className="absolute top-3 right-3 z-10 text-white/70 hover:text-red-600">
                <Heart size={18} />
              </button>

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
    )
}

export default Mahakal