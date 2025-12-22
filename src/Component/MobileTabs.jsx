import React, { useState } from "react";
import { Swords, Club, Menu, FileText, Wallet, Clock } from "lucide-react";

const mainTabs = [
  { icon: <Swords />, target: "cricket" },
  { icon: <Club />, target: "live-casino" },
];

const menuTabs = [
  { icon: <FileText />, target: "complete-form" },
  { icon: <Wallet />, target: "loan-disbursed" },
  { icon: <Wallet />, target: "processing-fees" },
  { icon: <Clock />, target: "wait-24-hours" },
];

const MobileTabs = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = (id) => {
    setOpenMenu(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* MENU OVERLAY */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" onClick={() => setOpenMenu(false)} />
      )}

      {/* MENU DRAWER */}
      <div
        className={`
          fixed bottom-14 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden
          transition-transform duration-300
          ${openMenu ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="grid grid-cols-4 gap-4 p-4">
          {menuTabs.map((item, i) => (
            <button
              key={i}
              onClick={() => handleScroll(item.target)}
              className="
                flex items-center justify-center
                h-12 rounded-lg
                bg-[#12263d]
                text-yellow-400
                hover:bg-[#1a3555]
              "
            >
              {React.cloneElement(item.icon, { size: 22 })}
            </button>
          ))}
        </div>
      </div>

      {/* BOTTOM TABS */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden">
        <div className="flex justify-around items-center h-14">

          {mainTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleScroll(tab.target)}
              className="flex items-center justify-center w-full h-full text-yellow-400"
            >
              {React.cloneElement(tab.icon, { size: 22 })}
            </button>
          ))}

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center justify-center w-full h-full text-yellow-400"
          >
            <Menu size={24} />
          </button>

        </div>
      </div>
    </>
  );
};

export default MobileTabs;
