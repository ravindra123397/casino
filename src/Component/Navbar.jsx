import React from "react";
import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import logo from "../assets/BOOK.png"; // replace with your logo

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Cricket",
    "Live Betting",
    "Casino",
    "Live Casino",
    "Aviator",
    "Promotions",
    "More",
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="RajaBets" className="h-8" />
          </div>

          {/* DESKTOP MENU */}
          {/* <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <button
                key={item}
                className="text-sm font-semibold uppercase text-gray-800 hover:text-yellow-500 transition"
              >
                {item}
              </button>
            ))}
          </nav> */}

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <Bell className="w-5 h-5 cursor-pointer text-gray-700" />

            <button className="text-sm font-semibold text-gray-800 hover:text-yellow-500">
              Login
            </button>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-4 py-2 rounded-md transition">
              Join Now
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-4 py-4">
            {/* {navLinks.map((item) => (
              <button
                key={item}
                className="text-sm font-semibold uppercase text-gray-800 text-left"
              >
                {item}
              </button>
            ))} */}

            <hr />

            <button className="text-sm font-semibold text-left">
              Login
            </button>

            <button className="bg-yellow-400 text-black font-bold text-sm py-2 rounded-md">
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
