import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* OVERLAY (MOBILE) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#0f172a] text-white z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* MENU */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
