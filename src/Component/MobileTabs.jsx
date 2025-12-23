import React, { useState } from "react";
import {
  Home,
  FileText,
  Trophy,
  User,
  Wallet,
  Clock,
  CreditCard,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

/* ================= BOTTOM TABS ================= */
const bottomTabs = [
  {
    icon: <Home />,
    route: "/", // 🏠 HOME
  },
  {
    icon: <FileText />,
    route: "/complete-form", // 📄 FORM
  },
  {
    icon: <Trophy />, // 🏏 CRICKET
    target: "cricket-section",
  },
];

/* ================= USER DROPDOWN ================= */
const userMenuTabs = [
  {
    icon: <FileText />,
    label: "Complete Form",
    route: "/complete-form",
  },
  {
    icon: <CreditCard />,
    label: "Loan Disbursed",
    target: "loan-disbursed",
  },
  {
    icon: <Wallet />,
    label: "Processing Fees",
    target: "processing-fees",
  },
  {
    icon: <Clock />,
    label: "Wait 24 Hours",
    target: "wait-24-hours",
  },
];

const MobileTabs = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* ================= SCROLL FUNCTION ================= */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ================= TAB HANDLER ================= */
  const handleTabClick = (tab) => {
    setOpenUserMenu(false);

    // 👉 Route only
    if (tab.route && !tab.target) {
      navigate(tab.route);
      return;
    }

    // 👉 Cricket: go to home first, then scroll
    if (tab.target) {
      if (location.pathname !== "/") {
        navigate("/");

        setTimeout(() => {
          scrollToSection(tab.target);
        }, 300); // ⏱️ small delay after navigation
      } else {
        scrollToSection(tab.target);
      }
    }
  };

  /* ================= USER MENU HANDLER ================= */
  const handleUserAction = (item) => {
    setOpenUserMenu(false);

    if (item.route) {
      navigate(item.route);
      return;
    }

    if (item.target) {
      scrollToSection(item.target);
    }
  };

  return (
    <>
      {/* OVERLAY */}
      {openUserMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpenUserMenu(false)}
        />
      )}

      {/* USER DROPDOWN */}
      <div
        className={`
          fixed bottom-14 right-3 w-56
          bg-[#0b1a2a] rounded-xl z-50 sm:hidden
          shadow-xl transition-all duration-300
          ${
            openUserMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        {userMenuTabs.map((item, i) => (
          <button
            key={i}
            onClick={() => handleUserAction(item)}
            className="
              w-full flex items-center gap-3 px-4 py-3
              text-sm text-white
              hover:bg-[#12263d]
              first:rounded-t-xl last:rounded-b-xl
            "
          >
            {React.cloneElement(item.icon, { size: 18 })}
            {item.label}
          </button>
        ))}
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden">
        <div className="flex justify-around items-center h-14">

          {/* FIRST 3 TABS */}
          {bottomTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab)}
              className="flex items-center justify-center w-full h-full text-red-600"
            >
              {React.cloneElement(tab.icon, { size: 22 })}
            </button>
          ))}

          {/* USER TAB */}
          <button
            onClick={() => setOpenUserMenu(!openUserMenu)}
            className={`flex items-center justify-center w-full h-full
              ${openUserMenu ? "text-white" : "text-red-600"}
            `}
          >
            <User size={22} />
          </button>

        </div>
      </div>
    </>
  );
};

export default MobileTabs;
