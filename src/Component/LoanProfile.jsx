// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../api/axiosInstance";
// import { CHECK_LOAN_STATUS } from "../api/constant/constant";
// import { ArrowLeft, CheckCircle, Clock } from "lucide-react";

// const LoanProfile = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [loanData, setLoanData] = useState(null);
//   const [error, setError] = useState(null);

//   const phone = localStorage.getItem("loan_phone");

//   useEffect(() => {
//     if (!phone) {
//       navigate("/");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const res = await axiosInstance.get(CHECK_LOAN_STATUS(phone));

//         if (res.data?.data) {
//           setLoanData(res.data.data);
//         } else {
//           // 🔄 Restart / Empty loan case
//           setLoanData({
//             firstName: "",
//             lastName: "",
//             phone,
//             status: "RESTART",
//           });
//         }
//       } catch (err) {
//         setError("Failed to load profile");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [phone, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa]">
//         <p className="text-lg font-semibold">Loading profile…</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa]">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   const isApproved = loanData.status === "APPROVED";

//   const statusText =
//     loanData.status === "RESTART"
//       ? "RESTARTED"
//       : loanData.status;

//   return (
//     <div className="min-h-screen bg-[#f5f6fa] p-4">
//       <div className="max-w-md mx-auto space-y-4">

//         {/* 🔙 HEADER */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => navigate("/")}
//             className="p-2 rounded-full bg-white shadow"
//           >
//             <ArrowLeft size={18} />
//           </button>
//           <h1 className="text-xl font-bold">My Profile</h1>
//         </div>

//         {/* 👤 USER CARD */}
//         <div className="bg-white rounded-2xl shadow p-5 space-y-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h2 className="text-lg font-bold">
//                 {loanData.firstName || "User"} {loanData.lastName}
//               </h2>
//               <p className="text-sm text-gray-500">{loanData.phone}</p>
//             </div>

//             {/* STATUS BADGE */}
//             <div
//               className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
//                 isApproved
//                   ? "bg-green-100 text-green-700"
//                   : "bg-yellow-100 text-yellow-700"
//               }`}
//             >
//               {isApproved ? <CheckCircle size={14} /> : <Clock size={14} />}
//               {statusText}
//             </div>
//           </div>

//           <Divider />

//           {loanData.panNumber && (
//             <ProfileRow label="PAN Number" value={loanData.panNumber} />
//           )}
//           {loanData.upiId && (
//             <ProfileRow label="UPI ID" value={loanData.upiId} />
//           )}
//           {loanData.bookType && (
//             <ProfileRow label="Casino Id" value={loanData.bookType} />
//           )}
//           {loanData.amountRequested && (
//             <ProfileRow
//               label="Loan Amount"
//               value={`₹${loanData.amountRequested.toLocaleString()}`}
//             />
//           )}
//         </div>

//         {/* 📂 DOCUMENTS */}
//         {(loanData.aadhaarFront ||
//           loanData.aadhaarBack ||
//           loanData.panFile) && (
//           <div className="bg-white rounded-2xl shadow p-5 space-y-3">
//             <h3 className="font-semibold text-sm text-gray-600">
//               Uploaded Documents
//             </h3>

//             <div className="grid grid-cols-2 gap-3">
//               {loanData.aadhaarFront && (
//                 <DocCard title="Aadhaar Front" src={loanData.aadhaarFront} />
//               )}
//               {loanData.aadhaarBack && (
//                 <DocCard title="Aadhaar Back" src={loanData.aadhaarBack} />
//               )}
//               {loanData.panFile && (
//                 <DocCard title="PAN Card" src={loanData.panFile} />
//               )}
//             </div>
//           </div>
//         )}

//         {/* ℹ️ MESSAGE */}
//         {loanData.userMessage && (
//           <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700 text-center">
//             {loanData.userMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// /* ---------------- SMALL COMPONENTS ---------------- */

// const ProfileRow = ({ label, value }) => (
//   <div className="flex justify-between text-sm">
//     <span className="text-gray-500">{label}</span>
//     <span className="font-semibold text-gray-800">{value}</span>
//   </div>
// );

// const Divider = () => <div className="h-px bg-gray-200 my-2" />;

// const DocCard = ({ title, src }) => (
//   <div className="border rounded-xl overflow-hidden">
//     <img src={src} alt={title} className="w-full h-32 object-cover" />
//     <div className="p-2 text-xs text-center font-semibold">{title}</div>
//   </div>
// );

// export default LoanProfile;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { CHECK_LOAN_STATUS } from "../api/constant/constant";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";

const LoanProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [loanData, setLoanData] = useState(null);
  const [error, setError] = useState(null);

  const phone = localStorage.getItem("loan_phone");

  useEffect(() => {
    if (!phone) {
      navigate("/");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get(CHECK_LOAN_STATUS(phone));

        if (res.data?.data) {
          setLoanData(res.data.data);
        } else {
          setLoanData({
            firstName: "",
            lastName: "",
            phone,
            status: "RESTART",
          });
        }
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [phone, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const isApproved = loanData.status === "APPROVED";

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-4">
      <div className="max-w-md mx-auto space-y-4">

        {/* HEADER */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full bg-white shadow"
          >
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-xl font-bold">My Profile</h1>
        </div>

        {/* USER CARD */}
        <div className="bg-white rounded-2xl shadow p-5 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">
                {loanData.firstName || "User"} {loanData.lastName}
              </h2>
              <p className="text-sm text-gray-500">{loanData.phone}</p>
            </div>

            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                isApproved
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {isApproved ? <CheckCircle size={14} /> : <Clock size={14} />}
              {loanData.status}
            </div>
          </div>

          <Divider />

          {loanData.panNumber && (
            <ProfileRow label="PAN Number" value={loanData.panNumber} />
          )}
          {loanData.upiId && (
            <ProfileRow label="UPI ID" value={loanData.upiId} />
          )}
          {loanData.bookType && (
            <ProfileRow label="Casino Id" value={loanData.bookType} />
          )}
          {loanData.amountRequested && (
            <ProfileRow
              label="Loan Amount"
              value={`₹${loanData.amountRequested.toLocaleString()}`}
            />
          )}
        </div>

        {/* DOCUMENTS */}
        {(loanData.aadhaarFront ||
          loanData.aadhaarBack ||
          loanData.panFile) && (
          <div className="bg-white rounded-2xl shadow p-5 space-y-3">
            <h3 className="font-semibold text-sm text-gray-600">
              Uploaded Documents
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {loanData.aadhaarFront && (
                <DocCard title="Aadhaar Front" src={loanData.aadhaarFront} />
              )}
              {loanData.aadhaarBack && (
                <DocCard title="Aadhaar Back" src={loanData.aadhaarBack} />
              )}
              {loanData.panFile && (
                <DocCard title="PAN Card" src={loanData.panFile} />
              )}
            </div>
          </div>
        )}

        {/* 🔘 ACTION BUTTON */}
        <div className="mt-4">
          {loanData.status === "APPROVED" && (
            <button
              onClick={() =>
                navigate("/complete-form", { state: { step: 4 } })
              }
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold"
            >
              Go to Loan Details
            </button>
          )}

          {loanData.status === "RESTART" && (
            <button
              onClick={() =>
                navigate("/complete-form", { state: { step: 2 } })
              }
              className="w-full bg-red-500 text-white py-3 rounded-xl font-bold"
            >
              Restart Loan Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const Divider = () => <div className="h-px bg-gray-200 my-2" />;

const DocCard = ({ title, src }) => (
  <div className="border rounded-xl overflow-hidden">
    <img src={src} alt={title} className="w-full h-32 object-cover" />
    <div className="p-2 text-xs text-center font-semibold">{title}</div>
  </div>
);

export default LoanProfile;
