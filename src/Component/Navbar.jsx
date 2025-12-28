import React from "react";
import { Bell } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/BOOK.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/complete-form");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO (CLICKABLE) */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="Sanwariya Seth Book"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <Bell className="w-5 h-5 cursor-pointer text-gray-700 hover:text-yellow-500 transition" />

            <button
              onClick={handleRedirect}
              className="
                bg-red-600 hover:bg-red-700 active:bg-red-800
                text-black font-semibold text-sm px-14 py-2
                rounded-md transition cursor-pointer
              "
            >
              Get a Credit
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={handleRedirect}
              className="
                bg-red-600 hover:bg-red-700 active:bg-red-800
                text-white font-semibold text-sm px-11 py-1.5
                rounded-md transition
              "
            >
              Get a Credit
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
