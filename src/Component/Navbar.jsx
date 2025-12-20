import React from "react";
import { Bell } from "lucide-react";
import logo from "../assets/BOOK.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="RajaBets" className="h-8 w-auto" />
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-5">
            <Bell className="w-5 h-5 cursor-pointer text-gray-700 hover:text-yellow-500 transition" />

            <button className="text-sm font-semibold text-gray-800 hover:text-yellow-500 transition">
              Login
            </button>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-5 py-2 rounded-md transition">
              Join Now
            </button>
          </div>

          {/* MOBILE ACTIONS (NO STATE) */}
          <div className="flex lg:hidden items-center gap-3">
            <button className="text-sm font-semibold text-gray-800">
              Login
            </button>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-4 py-1.5 rounded-md transition">
              Join Now
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
