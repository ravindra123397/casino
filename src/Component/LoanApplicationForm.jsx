// import React, { useState, useRef, useEffect } from "react";
// import Navbar from "./Navbar";
// import MobileTabs from "./MobileTabs";

// /* ===================== MAIN COMPONENT ===================== */
// const LoanApplicationForm = () => {
//   const [step, setStep] = useState(1);
//   const [otpSent, setOtpSent] = useState(false);
//   const [sendingOtp, setSendingOtp] = useState(false);




//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     otp: ["", "", "", ""],
//     amount: 50000,
//     aadhaarFront: null,
//     aadhaarBack: null,
//     panNumber: "",
//     panFile: null,
//     bookType: "",
//   });

//   const otpRefs = useRef([]);

//   /* OTP HANDLER */
//   const handleOtpChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;
//     const otp = [...formData.otp];
//     otp[index] = value;
//     setFormData({ ...formData, otp });
//     if (value && index < 3) otpRefs.current[index + 1]?.focus();
//   };

//   const sendOtp = () => {
//     if (formData.phone.length !== 10) {
//       alert("Enter valid phone number");
//       return;
//     }
//     setSendingOtp(true);
//     setTimeout(() => {
//       setSendingOtp(false);
//       setOtpSent(true);
//     }, 1000);
//   };

//   const handleSubmit = () => {
//     alert("Loan Application Submitted");
//     console.log(formData);
//   };

//   return (

//     <>
//     <Navbar />
//       <div className="min-h-screen bg-[#f5f6fa] flex justify-center px-3 pt-20">
//       <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

//         <Header />
//         <AmountCard amount={formData.amount} />
//         <HowToGetLoan />
//         <LoanSteps step={step} />

//         <div className="px-4 mt-4 space-y-3">
//           {step === 1 && (
//             <StepOne
//               formData={formData}
//               setFormData={setFormData}
//               sendOtp={sendOtp}
//               sendingOtp={sendingOtp}
//               otpSent={otpSent}
//               otpRefs={otpRefs}
//               handleOtpChange={handleOtpChange}
//               onNext={() => setStep(2)}
//             />
//           )}

//           {step === 2 && (
//             <StepTwo
//               formData={formData}
//               setFormData={setFormData}
//               onBack={() => setStep(1)}
//               onNext={() => setStep(3)}
//             />
//           )}

//           {step === 3 && (
//             <StepThree
//               formData={formData}
//               setFormData={setFormData}
//               onBack={() => setStep(2)}
//               onSubmit={handleSubmit}
//             />
//           )}
//         </div>

//         <Footer />
//       </div>
//       <MobileTabs />
//       <GlobalStyles />
//     </div>
//     </>
  
//   );
// };

// /* ===================== SUB COMPONENTS ===================== */

// const Header = () => (
//   <div className="px-5 pt-5 ">
//     <h2 className="text-lg font-semibold text-gray-700">Welcome!</h2>
//     <h1 className="text-xl font-bold text-gray-900">Sawariya Seth </h1>
//   </div>
// );

// const AmountCard = ({ amount }) => (
//   <div className="mx-4 mt-4 bg-[#f8f9fb] rounded-2xl p-5 text-center">
//     <h2 className="text-3xl font-extrabold">₹{amount.toLocaleString()}</h2>
//     <div className="flex justify-center gap-2 mt-3">
//       <span className="w-10 h-2 rounded bg-red-400" />
//       <span className="w-10 h-2 rounded bg-orange-400" />
//       <span className="w-10 h-2 rounded bg-lime-400" />
//       <span className="w-10 h-2 rounded bg-green-500" />
//     </div>
//     <button className="mt-4 w-full bg-red-500 font-semibold py-2 rounded-full">
//       Get My Loan
//     </button>
//   </div>
// );

// const HowToGetLoan = () => (
//   <div className="mx-4 mt-4 bg-[#f3f4f6] rounded-xl p-4 flex justify-between">
//     <div>
//       <h4 className="text-sm font-semibold">How to get a Loan</h4>
//       <p className="text-xs text-gray-500">
//         Only 3 steps are required<br />to successfully borrow
//       </p>
//     </div>
//     <span className="text-2xl">👌</span>
//   </div>
// );

// const LoanSteps = ({ step }) => (
//   <div className="mx-4 mt-4 bg-white rounded-xl border p-4">
//     <h4 className="text-sm font-semibold mb-3">Loan in 3 steps</h4>
//     <div className="flex justify-between text-xs">
//       <span className={step === 1 ? "text-red-500 font-semibold" : ""}>
//         Step 1<br />basic details
//       </span>
//       <span className={step === 2 ? "text-red-500 font-semibold" : ""}>
//         Step 2<br />Verification  
//       </span>
//       <span className={step === 3 ? "text-red-500 font-semibold" : ""}>
//         Step 3<br />Select Exchange 
//       </span>
//        <span className={step === 4 ? "text-red-500 font-semibold" : ""}>
//         Step 4<br />disbursement
//       </span>
//     </div>
//   </div>
// );

// /* ===================== STEPS ===================== */

// const StepOne = ({
//   formData,
//   setFormData,
//   sendOtp,
//   sendingOtp,
//   otpSent,
//   otpRefs,
//   handleOtpChange,
//   onNext,
// }) => (
//   <div className="space-y-4">
//     <Input label="First Name" onChange={(e) =>
//       setFormData({ ...formData, firstName: e.target.value })
//     } />
//     <Input label="Last Name" onChange={(e) =>
//       setFormData({ ...formData, lastName: e.target.value })
//     } />

//     <div>
//       <label className="label">Phone Number</label>
//       <div className="flex gap-2">
//         <input
//           maxLength={10}
//           className="input flex-1"
//           onChange={(e) =>
//             setFormData({ ...formData, phone: e.target.value })
//           }
//         />
//         <button onClick={sendOtp} className="btn-primary">
//           {sendingOtp ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
//         </button>
//       </div>
//     </div>

//     {otpSent && (
//       <div className="flex justify-center gap-3">
//         {formData.otp.map((_, i) => (
//           <input
//             key={i}
//             ref={(el) => (otpRefs.current[i] = el)}
//             maxLength={1}
//             className="otp-box"
//             onChange={(e) => handleOtpChange(e.target.value, i)}
//           />
//         ))}
//       </div>
//     )}

//     <button disabled={!otpSent} onClick={onNext} className="btn-primary w-full">
//       Continue
//     </button>
//   </div>
// );

// const StepTwo = ({ formData, setFormData, onBack, onNext }) => {
//     const PAN_SCORE_KEY = "pan_score_value";
//   const [panScore, setPanScore] = useState(null);

//   /* 🔹 LOAD PAN SCORE FROM LOCALSTORAGE (ONCE) */
//   useEffect(() => {
//     const savedScore = localStorage.getItem(PAN_SCORE_KEY);
//     if (savedScore) {
//       setPanScore(Number(savedScore));
//     }
//   }, []);

//   /* 🔹 PAN SCORE GENERATOR (ONE TIME ONLY) */
//   const generatePanScore = () => {
//     if (panScore) return;

//     const score = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
//     setPanScore(score);
//     localStorage.setItem(PAN_SCORE_KEY, score);
//   };

//   return (
//     <div className="space-y-4">

//       {/* LOAN AMOUNT */}
//       <div>
//         <label className="label">Loan Amount</label>
//         <p className="font-semibold text-blue-700">
//           ₹ {formData.amount.toLocaleString()}
//         </p>
//         <input
//           type="range"
//           min="10000"
//           max="50000"
//           step="1000"
//           value={formData.amount}
//           onChange={(e) =>
//             setFormData({ ...formData, amount: Number(e.target.value) })
//           }
//           className="w-full"
//         />
//       </div>

//       {/* AADHAAR */}
//       <FileInput
//         label="Aadhar Front"
//         onChange={(e) =>
//           setFormData({ ...formData, aadhaarFront: e.target.files[0] })
//         }
//       />

//       <FileInput
//         label="Aadhar Back"
//         onChange={(e) =>
//           setFormData({ ...formData, aadhaarBack: e.target.files[0] })
//         }
//       />

//       {/* PAN NUMBER */}
//       <Input
//         label="PAN Number"
//         placeholder="ABCDE1234F"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             panNumber: e.target.value.toUpperCase(),
//           })
//         }
//       />

//       {/* PAN SCORE CHECK */}
//       <div className="bg-gray-50 border rounded-xl p-4">
//         <label className="label">PAN Score</label>

//         {!panScore ? (
//           <button
//             onClick={generatePanScore}
//             className="btn-primary w-full"
//           >
//             Check PAN Score
//           </button>
//         ) : (
//           <div className="text-center mt-3">
//             <p className="text-xs text-gray-500">Your PAN Score</p>
//             <p
//               className={`text-3xl font-bold ${
//                 panScore >= 700
//                   ? "text-green-600"
//                   : panScore >= 500
//                   ? "text-yellow-500"
//                   : "text-red-500"
//               }`}
//             >
//               {panScore}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* PAN FILE */}
//       <FileInput
//         label="PAN Upload"
//         onChange={(e) =>
//           setFormData({ ...formData, panFile: e.target.files[0] })
//         }
//       />

//       {/* ACTION BUTTONS */}
//       <div className="flex gap-3">
//         <button onClick={onBack} className="btn-secondary w-1/2">
//           Back
//         </button>
//         <button
//           onClick={onNext}
//           className="btn-primary w-1/2"
//           disabled={!panScore}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// const StepThree = ({ formData, setFormData, onBack, onSubmit }) => (
//   <div className="space-y-4">
//     <select
//       className="input"
//       value={formData.bookType}
//       onChange={(e) =>
//         setFormData({ ...formData, bookType: e.target.value })
//       }
//     >
//       <option value="">Select book</option>
//       <option>Mahakal Book</option>
//       <option>Diamond999</option>
//       <option>All Panel</option>
//        <option>King Exchange</option>
//     </select>

//     <div className="flex gap-3">
//       <button onClick={onBack} className="btn-secondary w-1/2">Back</button>
//       <button disabled={!formData.bookType} onClick={onSubmit} className="btn-success w-1/2">
//         Submit
//       </button>
//     </div>
//   </div>
// );

// const Footer = () => (
//   <div className="text-center text-[10px] text-gray-400 mt-6 px-4 pb-4">
//     Regulated by RBI <br /> SSA Finserv Private Limited
//   </div>
// );

// /* ===================== REUSABLE ===================== */

// const Input = ({ label, ...props }) => (
//   <div>
//     <label className="label">{label}</label>
//     <input className="input" {...props} />
//   </div>
// );

// const FileInput = ({ label, ...props }) => (
//   <div>
//     <label className="label">{label}</label>
//     <input type="file" className="input" {...props} />
//   </div>
// );

// const GlobalStyles = () => (
//   <style>{`
//     .label { font-size: 12px; font-weight: 600; }
//     .input {
//       width: 100%;
//       padding: 0.7rem;
//       border: 1px solid #d1d5db;
//       border-radius: 0.7rem;
//     }
//     .btn-primary {
//       background: #facc15;
//       padding: 0.7rem;
//       border-radius: 0.7rem;
//       font-weight: 600;
//     }
//     .btn-secondary {
//       background: #e5e7eb;
//       padding: 0.7rem;
//       border-radius: 0.7rem;
//     }
//     .btn-success {
//       background: #22c55e;
//       color: white;
//       padding: 0.7rem;
//       border-radius: 0.7rem;
//       font-weight: 600;
//     }
//     .otp-box {
//       width: 3rem;
//       height: 3rem;
//       text-align: center;
//       border-radius: 0.6rem;
//       border: 1px solid #d1d5db;
//     }
//   `}</style>
// );

// export default LoanApplicationForm;


import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import MobileTabs from "./MobileTabs";

/* ===================== MAIN COMPONENT ===================== */
const LoanApplicationForm = () => {
  /* -------- STEP CONTROL -------- */
  const [step, setStep] = useState(1); // current step
  const [loading, setLoading] = useState(false); // loader between steps
  const [finalLoading, setFinalLoading] = useState(false); // 1 min loader

  /* -------- OTP STATES -------- */
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  /* -------- FORM DATA -------- */
  const [formData, setFormData] = useState({
    firstName: "",        // user first name
    lastName: "",         // user last name
    phone: "",            // mobile number
    otp: ["", "", "", ""],// otp digits
    amount: 50000,        // loan amount
    aadhaarFront: null,   // aadhaar front file
    aadhaarBack: null,    // aadhaar back file
    panNumber: "",        // PAN number
    panFile: null,        // PAN file
    bookType: "",         // exchange selection
  });

  const otpRefs = useRef([]);

  /* ================= OTP HANDLER ================= */
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const otp = [...formData.otp];
    otp[index] = value;
    setFormData({ ...formData, otp });
    if (value && index < 3) otpRefs.current[index + 1]?.focus();
  };

  /* ================= SEND OTP ================= */
  const sendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Enter valid 10 digit phone number");
      return;
    }
    setSendingOtp(true);
    setTimeout(() => {
      setSendingOtp(false);
      setOtpSent(true);
    }, 1000);
  };

  /* ================= STEP CHANGE WITH LOADER ================= */
  const handleNext = (nextStep) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(nextStep);
    }, 2000);
  };

  /* ================= FINAL SUBMIT ================= */
  const handleSubmit = () => {
    setFinalLoading(true);
    setTimeout(() => {
      setFinalLoading(false);
      setStep(4); // ✅ Step-4 only after submit
    }, 60000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f6fa] flex justify-center px-3 pt-20">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

          <Header />
          <AmountCard amount={formData.amount} />

          {/* 🔴 Step indicator me STEP-4 REMOVED */}
          <LoanSteps step={step} />

          <div className="px-4 mt-4 space-y-3">

            {loading && <StepLoader text="Please wait..." />}
            {finalLoading && <FinalLoader />}

            {!loading && !finalLoading && step === 1 && (
              <StepOne
                formData={formData}
                setFormData={setFormData}
                sendOtp={sendOtp}
                sendingOtp={sendingOtp}
                otpSent={otpSent}
                otpRefs={otpRefs}
                handleOtpChange={handleOtpChange}
                onNext={() => handleNext(2)}
              />
            )}

            {!loading && !finalLoading && step === 2 && (
              <StepTwo
                formData={formData}
                setFormData={setFormData}
                onBack={() => setStep(1)}
                onNext={() => handleNext(3)}
              />
            )}

            {!loading && !finalLoading && step === 3 && (
              <StepThree
                formData={formData}
                setFormData={setFormData}
                onBack={() => setStep(2)}
                onSubmit={handleSubmit}
              />
            )}

            {/* ✅ Step-4 sirf submit ke baad */}
            {!loading && !finalLoading && step === 4 && <StepFour />}

          </div>

          <Footer />
        </div>

        <MobileTabs />
        <GlobalStyles />
      </div>
    </>
  );
};

/* ===================== HEADER ===================== */
const Header = () => (
  <div className="px-5 pt-5">
    <h2 className="text-lg font-semibold text-gray-700">Welcome!</h2>
    <h1 className="text-xl font-bold">Sawariya Seth</h1>
  </div>
);

/* ===================== AMOUNT CARD ===================== */
const AmountCard = ({ amount }) => (
  <div className="mx-4 mt-4 bg-[#f8f9fb] rounded-2xl p-5 text-center">
    <h2 className="text-3xl font-extrabold">₹{amount.toLocaleString()}</h2>
    <button className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded-full">
      Get My Loan
    </button>
  </div>
);

/* ===================== STEP INDICATOR (3 STEPS ONLY) ===================== */
const LoanSteps = ({ step }) => (
  <div className="mx-4 mt-4 bg-white rounded-xl border p-4">
    <h4 className="text-sm font-semibold mb-3">Loan in 3 steps</h4>
    <div className="flex justify-between text-xs">
      {["Basic", "Verify", "Exchange"].map((t, i) => (
        <span
          key={i}
          className={step === i + 1 ? "text-red-500 font-bold" : ""}
        >
          Step {i + 1}<br />{t}
        </span>
      ))}
    </div>
  </div>
);

/* ===================== STEP 1 ===================== */
const StepOne = ({
  formData,
  setFormData,
  sendOtp,
  sendingOtp,
  otpSent,
  otpRefs,
  handleOtpChange,
  onNext,
}) => {
  const otpValid = formData.otp.join("").length === 4;

  return (
    <div className="space-y-4">
      <Input label="First Name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      <Input label="Last Name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      <Input label="Phone Number" maxLength={10} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

      <button onClick={sendOtp} className="btn-primary w-full">
        {sendingOtp ? "Sending OTP..." : otpSent ? "Resend OTP" : "Send OTP"}
      </button>

      {otpSent && (
        <div className="flex justify-center gap-2">
          {formData.otp.map((_, i) => (
            <input
              key={i}
              ref={(el) => (otpRefs.current[i] = el)}
              className="otp-box"
              maxLength={1}
              onChange={(e) => handleOtpChange(e.target.value, i)}
            />
          ))}
        </div>
      )}

      <button disabled={!otpValid} onClick={onNext} className="btn-success w-full">
        Continue
      </button>
    </div>
  );
};

/* ===================== STEP 2 ===================== */
const StepTwo = ({ formData, setFormData, onBack, onNext }) => {
    const PAN_SCORE_KEY = "pan_score_value";
  const [panScore, setPanScore] = useState(null);

  /* 🔹 LOAD PAN SCORE FROM LOCALSTORAGE (ONCE) */
  useEffect(() => {
    const savedScore = localStorage.getItem(PAN_SCORE_KEY);
    if (savedScore) {
      setPanScore(Number(savedScore));
    }
  }, []);

  /* 🔹 PAN SCORE GENERATOR (ONE TIME ONLY) */
  const generatePanScore = () => {
    if (panScore) return;

    const score = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
    setPanScore(score);
    localStorage.setItem(PAN_SCORE_KEY, score);
  };

  return (
    <div className="space-y-4">

      {/* LOAN AMOUNT */}
      <div>
        <label className="label">Loan Amount</label>
        <p className="font-semibold text-blue-700">
          ₹ {formData.amount.toLocaleString()}
        </p>
        <input
          type="range"
          min="10000"
          max="50000"
          step="1000"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: Number(e.target.value) })
          }
          className="w-full"
        />
      </div>

      {/* AADHAAR */}
      <FileInput
        label="Aadhar Front"
        onChange={(e) =>
          setFormData({ ...formData, aadhaarFront: e.target.files[0] })
        }
      />

      <FileInput
        label="Aadhar Back"
        onChange={(e) =>
          setFormData({ ...formData, aadhaarBack: e.target.files[0] })
        }
      />

      {/* PAN NUMBER */}
      <Input
        label="PAN Number"
        placeholder="ABCDE1234F"
        onChange={(e) =>
          setFormData({
            ...formData,
            panNumber: e.target.value.toUpperCase(),
          })
        }
      />

      {/* PAN SCORE CHECK */}
      <div className="bg-gray-50 border rounded-xl p-4">
        <label className="label">PAN Score</label>

        {!panScore ? (
          <button
            onClick={generatePanScore}
            className="btn-primary w-full"
          >
            Check PAN Score
          </button>
        ) : (
          <div className="text-center mt-3">
            <p className="text-xs text-gray-500">Your PAN Score</p>
            <p
              className={`text-3xl font-bold ${
                panScore >= 700
                  ? "text-green-600"
                  : panScore >= 500
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {panScore}
            </p>
          </div>
        )}
      </div>

      {/* PAN FILE */}
      <FileInput
        label="PAN Upload"
        onChange={(e) =>
          setFormData({ ...formData, panFile: e.target.files[0] })
        }
      />

      {/* ACTION BUTTONS */}
      <div className="flex gap-3">
        <button onClick={onBack} className="btn-secondary w-1/2">
          Back
        </button>
        <button
          onClick={onNext}
          className="btn-primary w-1/2"
          disabled={!panScore}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

/* ===================== STEP 3 ===================== */
const StepThree = ({ formData, setFormData, onBack, onSubmit }) => (
  <div className="space-y-4">
    <select
      className="input"
      value={formData.bookType}
      onChange={(e) => setFormData({ ...formData, bookType: e.target.value })}
    >
      <option value="">Select Exchange</option>
      <option>Mahakal Book</option>
      <option>Diamond999</option>
      <option>All Panel</option>
      <option>King Exchange</option>
    </select>

    <div className="flex gap-3">
      <button onClick={onBack} className="btn-secondary w-1/2">Back</button>
      <button disabled={!formData.bookType} onClick={onSubmit} className="btn-success w-1/2">
        Submit
      </button>
    </div>
  </div>
);

/* ===================== STEP 4 (FINAL) ===================== */
const StepFour = () => (
  <div className="p-4">
    {/* <h2 className="text-center font-bold mb-3">Money Keeper</h2> */}

    <div className="bg-red-100 rounded-xl p-3 text-xs text-center mb-4">
      🔊 94****18 successfully borrowing ₹4,00,000
    </div>

    <div className="bg-white border rounded-xl p-4 space-y-2">
      <Row label="Loan Amount" value="₹1,50,000" />
      <Row label="Loan Term" value="12 Months" />
      <Row label="Total Interest" value="₹7,500" red />
      <Row label="Monthly EMI" value="₹13,125" />
      <Row label="Processing Fee" value="₹1,500" red />
    </div>

    <button className="mt-5 w-full bg-red-500 text-white py-3 rounded-full font-bold">
      Withdraw Now
    </button>
  </div>
);

/* ===================== LOADERS ===================== */
const StepLoader = ({ text }) => (
  <div className="flex flex-col items-center py-8">
    <div className="loader mb-2" />
    <p className="text-xs text-gray-500">{text}</p>
  </div>
);

const FinalLoader = () => (
  <div className="flex flex-col items-center py-12">
    <div className="loader-lg mb-3" />
    <p className="text-sm text-gray-500">Processing your loan...</p>
  </div>
);

/* ===================== COMMON ===================== */
const Row = ({ label, value, red }) => (
  <div className="flex justify-between text-sm">
    <span>{label}</span>
    <span className={red ? "text-red-500 font-semibold" : "font-semibold"}>
      {value}
    </span>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="label">{label}</label>
    <input className="input" {...props} />
  </div>
);

const FileInput = ({ label, ...props }) => (
  <div>
    <label className="label">{label}</label>
    <input type="file" className="input" {...props} />
  </div>
);

const Footer = () => (
  <div className="text-center text-[10px] text-gray-400 mt-6 pb-4">
    Regulated by RBI · SSA Finserv Pvt Ltd
  </div>
);

/* ===================== STYLES ===================== */
const GlobalStyles = () => (
  <style>{`
    .label { font-size: 12px; font-weight: 600; }
    .input { width:100%; padding:.7rem; border:1px solid #d1d5db; border-radius:.7rem; }
    .btn-primary { background:#ef4444; color:#fff; padding:.7rem; border-radius:.7rem; font-weight:600; }
    .btn-secondary { background:#e5e7eb; padding:.7rem; border-radius:.7rem; }
    .btn-success { background:#22c55e; color:#fff; padding:.7rem; border-radius:.7rem; font-weight:600; }
    .otp-box { width:3rem; height:3rem; text-align:center; border-radius:.6rem; border:1px solid #d1d5db; }
    .loader { width:32px; height:32px; border:4px solid #e5e7eb; border-top:4px solid #ef4444; border-radius:50%; animation:spin 1s linear infinite; }
    .loader-lg { width:48px; height:48px; border:5px solid #e5e7eb; border-top:5px solid #ef4444; border-radius:50%; animation:spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `}</style>
);

export default LoanApplicationForm;
