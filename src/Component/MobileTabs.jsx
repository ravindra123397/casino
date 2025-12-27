// import React, { useState } from "react";
// import {
//   Home,
//   FileText,
//   Trophy,
//   User,
//   Wallet,
//   Clock,
//   CreditCard,
// } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";

// /* ================= BOTTOM TABS ================= */
// const bottomTabs = [
//   {
//     icon: <Home />,
//     route: "/", // 🏠 HOME
//   },
//   {
//     icon: <FileText />,
//     route: "/complete-form", // 📄 FORM
//   },
//   {
//     icon: <Trophy />, // 🏏 CRICKET
//     target: "cricket-section",
//   },
// ];

// /* ================= USER DROPDOWN ================= */
// const userMenuTabs = [
//   {
//     icon: <FileText />,
//     label: "Complete Form",
//     route: "/complete-form",
//   },
//   {
//     icon: <CreditCard />,
//     label: "Loan Disbursed",
//     target: "loan-disbursed",
//   },
//   {
//     icon: <Wallet />,
//     label: "Processing Fees",
//     target: "processing-fees",
//   },
//   {
//     icon: <Clock />,
//     label: "Wait 24 Hours",
//     target: "wait-24-hours",
//   },
// ];

// const MobileTabs = () => {
//   const [openUserMenu, setOpenUserMenu] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   /* ================= SCROLL WITH OFFSET (FIX) ================= */
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;

//     const NAVBAR_OFFSET = 80; // 👈 navbar height
//     const y =
//       el.getBoundingClientRect().top +
//       window.pageYOffset -
//       NAVBAR_OFFSET;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   };

//   /* ================= TAB HANDLER ================= */
//   const handleTabClick = (tab) => {
//     setOpenUserMenu(false);

//     // 👉 Route only
//     if (tab.route && !tab.target) {
//       navigate(tab.route);
//       return;
//     }

//     // 👉 Scroll target
//     if (tab.target) {
//       if (location.pathname !== "/") {
//         navigate("/");

//         setTimeout(() => {
//           scrollToSection(tab.target);
//         }, 300);
//       } else {
//         scrollToSection(tab.target);
//       }
//     }
//   };

//   /* ================= USER MENU HANDLER ================= */
//   const handleUserAction = (item) => {
//     setOpenUserMenu(false);

//     if (item.route) {
//       navigate(item.route);
//       return;
//     }

//     if (item.target) {
//       if (location.pathname !== "/") {
//         navigate("/");
//         setTimeout(() => {
//           scrollToSection(item.target);
//         }, 300);
//       } else {
//         scrollToSection(item.target);
//       }
//     }
//   };

//   return (
//     <>
//       {/* ================= OVERLAY ================= */}
//       {openUserMenu && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 sm:hidden"
//           onClick={() => setOpenUserMenu(false)}
//         />
//       )}

//       {/* ================= USER DROPDOWN ================= */}
//       <div
//         className={`
//           fixed bottom-14 right-3 w-56
//           bg-[#0b1a2a] rounded-xl z-50 sm:hidden
//           shadow-xl transition-all duration-300
//           ${
//             openUserMenu
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-4 pointer-events-none"
//           }
//         `}
//       >
//         {userMenuTabs.map((item, i) => (
//           <button
//             key={i}
//             onClick={() => handleUserAction(item)}
//             className="
//               w-full flex items-center gap-3 px-4 py-3
//               text-sm text-white
//               hover:bg-[#12263d]
//               first:rounded-t-xl last:rounded-b-xl
//             "
//           >
//             {React.cloneElement(item.icon, { size: 18 })}
//             {item.label}
//           </button>
//         ))}
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="fixed bottom-0 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden">
//         <div className="flex justify-around items-center h-14">

//           {/* FIRST 3 TABS */}
//           {bottomTabs.map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => handleTabClick(tab)}
//               className="flex items-center justify-center w-full h-full text-red-600"
//             >
//               {React.cloneElement(tab.icon, { size: 22 })}
//             </button>
//           ))}

//           {/* USER TAB */}
//           <button
//             onClick={() => setOpenUserMenu(!openUserMenu)}
//             className={`flex items-center justify-center w-full h-full
//               ${openUserMenu ? "text-white" : "text-red-600"}
//             `}
//           >
//             <User size={22} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileTabs;

import React, { useEffect, useState } from "react";
import { Home, Shuffle, CreditCard, User, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLoanStatusThunk } from "../Store/Slice/loanSlice";

const MobileTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { statusResult, loading } = useSelector((s) => s.loan);

  const phone = localStorage.getItem("phone"); // user phone saved during loan

  const [showProfileMsg, setShowProfileMsg] = useState(false);

  /* 🔹 CHECK LOAN STATUS ON LOAD */
  useEffect(() => {
    if (phone) {
      dispatch(checkLoanStatusThunk(phone));
    }
  }, [dispatch, phone]);

  const loanApproved = statusResult?.status === "APPROVED";
  const loanInProcess =
    statusResult && statusResult.status !== "APPROVED";

  /* 🔹 SCROLL */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  /* 🔹 HANDLERS */
  const goHome = () => {
    if (location.pathname !== "/") navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goExchange = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection("exchanges"), 300);
    } else {
      scrollToSection("exchanges");
    }
  };

  const handleLoan = () => {
    navigate("/complete-form");
  };

  return (
    <>
      {/* 🔴 LOAN PROCESS MESSAGE */}
      {loanInProcess && (
        <div className="fixed bottom-16 left-0 w-full px-4 z-40 sm:hidden">
          <div className="bg-[#0b1a2a] text-white p-4 rounded-xl flex flex-col items-center gap-2">
            {loading ? (
              <Loader2 className="animate-spin" size={32} />
            ) : (
              <Loader2 className="animate-spin" size={32} />
            )}
            <p className="font-semibold">Your loan is in process</p>
            <p className="text-sm text-gray-400 text-center">
              We usually take 24 hours to process the loan
            </p>
          </div>
        </div>
      )}

      {/* 🔴 PROFILE MESSAGE (ONLY IF NOT APPROVED) */}
      {showProfileMsg && !loanApproved && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
          <div className="bg-[#0b1a2a] text-white p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold mb-3">
              Your profile is shown after
            </h2>
            <p className="text-lg">
              loan disbursement in your exchange
            </p>

            <button
              onClick={() => setShowProfileMsg(false)}
              className="mt-5 px-6 py-2 bg-red-600 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* 🔹 BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden">
        <div className="flex justify-around items-center h-14 text-red-600">

          {/* HOME */}
          <button onClick={goHome} className="w-full flex justify-center">
            <Home size={22} />
          </button>

          {/* EXCHANGES */}
          <button onClick={goExchange} className="w-full flex justify-center">
            <Shuffle size={22} />
          </button>

          {/* LOAN */}
          <button onClick={handleLoan} className="w-full flex justify-center">
            <CreditCard size={22} />
          </button>

          {/* PROFILE */}
          <button
            onClick={() =>
              loanApproved
                ? navigate("/profile")
                : setShowProfileMsg(true)
            }
            className="w-full flex justify-center"
          >
            <User size={22} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileTabs;
