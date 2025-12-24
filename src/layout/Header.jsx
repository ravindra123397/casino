import React, { useState } from "react";
import { Menu, LogOut, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../Store/Slice/authSlice";

const Header = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setShowLogout(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          fixed top-0 left-0 md:left-64 right-0 h-16
          bg-white shadow flex items-center justify-between px-6 z-30
        "
      >
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <button
          onClick={() => setShowLogout(true)}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded
                     hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </header>

      {/* ================= LOGOUT MODAL ================= */}
      {showLogout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[320px] p-6 relative text-center">

            {/* Close */}
            <button
              onClick={() => setShowLogout(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-100
                            flex items-center justify-center">
              <LogOut className="text-blue-600" size={30} />
            </div>

            {/* Text */}
            <h2 className="text-lg font-semibold mb-2">
              Logout
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to logout?
            </p>

            {/* Action */}
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600
                         text-white py-2 rounded-full font-semibold
                         hover:opacity-90 transition"
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
