



import React, { useEffect, useState } from "react";
import { Home, Shuffle, CreditCard, User, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { statusResult } = useSelector((s) => s.loanFlow);
  const [showProcessLoader, setShowProcessLoader] = useState(false);

  const loanInProcess =
    statusResult && statusResult.status !== "APPROVED";

  /* ================= FORCE LOADER FOR 30 SECONDS ================= */
  useEffect(() => {
    let timer;

    if (loanInProcess) {
      setShowProcessLoader(true);
      timer = setTimeout(() => {
        setShowProcessLoader(false);
      }, 30000);
    } else {
      setShowProcessLoader(false);
    }

    return () => clearTimeout(timer);
  }, [loanInProcess]);

  const goHome = () => {
    if (location.pathname !== "/") navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goExchange = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("exchanges");
        el && window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* 🔴 LOAN PROCESS MESSAGE */}
      {loanInProcess && showProcessLoader && (
        <div className="fixed bottom-28 left-0 w-full px-4 z-40 sm:hidden">
          <div className="bg-[#0b1a2a] text-white p-4 rounded-xl flex flex-col items-center gap-2">
            <Loader2 className="animate-spin" size={32} />
            <p className="font-semibold">Your loan is in process</p>
            <p className="text-sm text-gray-400 text-center">
              Please wait, we are processing your loan…
            </p>
          </div>
        </div>
      )}

      {/* 🔹 BOTTOM CONTAINER (BAR + FOOTER) */}
      <div className="fixed bottom-0 left-0 w-full z-50 sm:hidden bg-[#0b1a2a]">
        
        {/* 🔹 ICON BAR */}
        <div className="flex justify-around items-center h-14 text-red-600 border-t border-[#132a44]">
          <button onClick={goHome} className="w-full flex justify-center">
            <Home size={22} />
          </button>

          <button onClick={goExchange} className="w-full flex justify-center">
            <Shuffle size={22} />
          </button>

          <button
            onClick={() => navigate("/complete-form")}
            className="w-full flex justify-center"
          >
            <CreditCard size={22} />
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="w-full flex justify-center"
          >
            <User size={22} />
          </button>
        </div>

        {/* ✅ FOOTER — SABSE LAST */}
        <div className="bg-white py-2 text-center text-[11px] text-gray-500 border-t">
          Sawariya Seth Book is an official brand of Takmon Boost
        </div>
      </div>
    </>
  );
};

export default MobileTabs;
