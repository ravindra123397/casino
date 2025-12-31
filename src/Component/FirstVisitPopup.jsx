import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import popupImage from "../assets/first-popup.png";

const FirstVisitPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("first_popup_seen");
    if (!seen) setShow(true);
  }, []);

  const closePopup = () => {
    localStorage.setItem("first_popup_seen", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
      <div className="relative max-w-md w-full rounded-2xl overflow-hidden animate-scaleIn">

        {/* ❌ CLOSE */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow-lg hover:scale-105 transition"
        >
          <X size={22} />
        </button>

        {/* IMAGE */}
        <img
          src={popupImage}
          alt="Loan Offer"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FirstVisitPopup;
