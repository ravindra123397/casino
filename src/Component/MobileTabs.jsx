// import React, { useEffect, useState } from "react";
// import { Home, Shuffle, CreditCard, User, Loader2 } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// const MobileTabs = () => {


//   const navigate = useNavigate();
//   const location = useLocation();

//   const { statusResult } = useSelector((s) => s.loanFlow);

//   // const [showProfileMsg, setShowProfileMsg] = useState(false);
//   const [showProcessLoader, setShowProcessLoader] = useState(false);
//   const [showNameTag, setShowNameTag] = useState(false);

//   const firstName = localStorage.getItem("username");

//   const loanApproved = statusResult?.status === "APPROVED";
//   const loanInProcess =
//     statusResult && statusResult.status !== "APPROVED";

//   /* ================= FORCE LOADER FOR 30 SECONDS ================= */
//   useEffect(() => {
//     let timer;

//     if (loanInProcess) {
//       setShowProcessLoader(true);
//       timer = setTimeout(() => {
//         setShowProcessLoader(false);
//       }, 30000);
//     } else {
//       setShowProcessLoader(false);
//     }

//     return () => clearTimeout(timer);
//   }, [loanInProcess]);

//   /* 🔹 SCROLL */
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
//   };

//   /* 🔹 HANDLERS */
//   const goHome = () => {
//     if (location.pathname !== "/") navigate("/");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const goExchange = () => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => scrollToSection("exchanges"), 300);
//     } else {
//       scrollToSection("exchanges");
//     }
//   };

//   const handleLoan = () => {
//     navigate("/complete-form");
//   };

//   const handleProfile = () => {
//   // if (!loanApproved) {
//   //   setShowProfileMsg(true);
//   //   return;
//   // }
//   navigate("/profile");
// };

//   return (
//     <>
//       {/* 🔴 LOAN PROCESS MESSAGE */}
//       {loanInProcess && showProcessLoader && (
//         <div className="fixed bottom-16 left-0 w-full px-4 z-40 sm:hidden">
//           <div className="bg-[#0b1a2a] text-white p-4 rounded-xl flex flex-col items-center gap-2">
//             <Loader2 className="animate-spin" size={32} />
//             <p className="font-semibold">Your loan is in process</p>
//             <p className="text-sm text-gray-400 text-center">
//               Please wait, we are processing your loan…
//             </p>
//           </div>
//         </div>
//       )}

//       {/* 🟢 NAME TAG (PROFILE CLICK) */}
//       {showNameTag && firstName && (
//         <div className="fixed bottom-20 right-4 z-50 sm:hidden">
//           <div className="bg-white text-black px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
//             👋 Hi, {firstName}
//           </div>
//         </div>
//       )}

//       {/* 🔹 BOTTOM BAR */}
//       <div className="fixed bottom-0 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden">
//         <div className="flex justify-around items-center h-14 text-red-600">

//           {/* HOME */}
//           <button onClick={goHome} className="w-full flex justify-center">
//             <Home size={22} />
//           </button>

//           {/* EXCHANGES */}
//           <button onClick={goExchange} className="w-full flex justify-center">
//             <Shuffle size={22} />
//           </button>

//           {/* LOAN */}
//           <button onClick={handleLoan} className="w-full flex justify-center">
//             <CreditCard size={22} />
//           </button>

//           {/* PROFILE (NO REDIRECT) */}
//           <button onClick={handleProfile} className="w-full flex justify-center">
//             <User size={22} />
//           </button>
//         </div>
//       </div>

//       {/* 🔴 PROFILE LOCKED MESSAGE */}
//       {/* {showProfileMsg && !loanApproved && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
//           <div className="bg-[#0b1a2a] text-white p-6 rounded-xl text-center">
//             <h2 className="text-xl font-bold mb-3">
//               Profile Locked
//             </h2>
//             <p className="text-lg">
//               Your profile will be visible after loan disbursement
//             </p>

//             <button
//               onClick={() => setShowProfileMsg(false)}
//               className="mt-5 px-6 py-2 bg-red-600 rounded-lg"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )} */}
//     </>
//   );
// };

// export default MobileTabs;



import React, { useEffect, useState } from "react";
import { Home, Shuffle, CreditCard, User, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { statusResult } = useSelector((s) => s.loanFlow);

  const [showProcessLoader, setShowProcessLoader] = useState(false);

  const firstName = localStorage.getItem("username");

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

  /* ✅ PROFILE ALWAYS ACCESSIBLE */
  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      {/* 🔴 LOAN PROCESS MESSAGE */}
      {loanInProcess && showProcessLoader && (
        <div className="fixed bottom-16 left-0 w-full px-4 z-40 sm:hidden">
          <div className="bg-[#0b1a2a] text-white p-4 rounded-xl flex flex-col items-center gap-2">
            <Loader2 className="animate-spin" size={32} />
            <p className="font-semibold">Your loan is in process</p>
            <p className="text-sm text-gray-400 text-center">
              Please wait, we are processing your loan…
            </p>
          </div>
        </div>
      )}

      {/* 🔹 BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0b1a2a] z-50 sm:hidden">
        <div className="flex justify-around items-center h-14 text-red-600">
          <button onClick={goHome} className="w-full flex justify-center">
            <Home size={22} />
          </button>

          <button onClick={goExchange} className="w-full flex justify-center">
            <Shuffle size={22} />
          </button>

          <button onClick={handleLoan} className="w-full flex justify-center">
            <CreditCard size={22} />
          </button>

          <button onClick={handleProfile} className="w-full flex justify-center">
            <User size={22} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileTabs;
