import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import MobileTabs from "./MobileTabs";

/* ===================== MAIN COMPONENT ===================== */
const LoanApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);




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

  /* OTP HANDLER */
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const otp = [...formData.otp];
    otp[index] = value;
    setFormData({ ...formData, otp });
    if (value && index < 3) otpRefs.current[index + 1]?.focus();
  };

  const sendOtp = () => {
    if (formData.phone.length !== 10) {
      alert("Enter valid phone number");
      return;
    }
    setSendingOtp(true);
    setTimeout(() => {
      setSendingOtp(false);
      setOtpSent(true);
    }, 1000);
  };

  const handleSubmit = () => {
    alert("Loan Application Submitted");
    console.log(formData);
  };

  return (

    <>
    <Navbar />
      <div className="min-h-screen bg-[#f5f6fa] flex justify-center px-3 pt-20">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">

        <Header />
        <AmountCard amount={formData.amount} />
        <HowToGetLoan />
        <LoanSteps step={step} />

        <div className="px-4 mt-4 space-y-3">
          {step === 1 && (
            <StepOne
              formData={formData}
              setFormData={setFormData}
              sendOtp={sendOtp}
              sendingOtp={sendingOtp}
              otpSent={otpSent}
              otpRefs={otpRefs}
              handleOtpChange={handleOtpChange}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepTwo
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <StepThree
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep(2)}
              onSubmit={handleSubmit}
            />
          )}
        </div>

        <Footer />
      </div>
      <MobileTabs />
      <GlobalStyles />
    </div>
    </>
  
  );
};

/* ===================== SUB COMPONENTS ===================== */

const Header = () => (
  <div className="px-5 pt-5 ">
    <h2 className="text-lg font-semibold text-gray-700">Welcome!</h2>
    <h1 className="text-xl font-bold text-gray-900">Sawariya Seth </h1>
  </div>
);

const AmountCard = ({ amount }) => (
  <div className="mx-4 mt-4 bg-[#f8f9fb] rounded-2xl p-5 text-center">
    <h2 className="text-3xl font-extrabold">₹{amount.toLocaleString()}</h2>
    <div className="flex justify-center gap-2 mt-3">
      <span className="w-10 h-2 rounded bg-red-400" />
      <span className="w-10 h-2 rounded bg-orange-400" />
      <span className="w-10 h-2 rounded bg-lime-400" />
      <span className="w-10 h-2 rounded bg-green-500" />
    </div>
    <button className="mt-4 w-full bg-red-500 font-semibold py-2 rounded-full">
      Get My Loan
    </button>
  </div>
);

const HowToGetLoan = () => (
  <div className="mx-4 mt-4 bg-[#f3f4f6] rounded-xl p-4 flex justify-between">
    <div>
      <h4 className="text-sm font-semibold">How to get a Loan</h4>
      <p className="text-xs text-gray-500">
        Only 3 steps are required<br />to successfully borrow
      </p>
    </div>
    <span className="text-2xl">👌</span>
  </div>
);

const LoanSteps = ({ step }) => (
  <div className="mx-4 mt-4 bg-white rounded-xl border p-4">
    <h4 className="text-sm font-semibold mb-3">Loan in 3 steps</h4>
    <div className="flex justify-between text-xs">
      <span className={step === 1 ? "text-yellow-500 font-semibold" : ""}>
        Step 1<br />Basic Info
      </span>
      <span className={step === 2 ? "text-yellow-500 font-semibold" : ""}>
        Step 2<br />Adhar details 
      </span>
      <span className={step === 3 ? "text-yellow-500 font-semibold" : ""}>
        Step 3<br />Like Book
      </span>
    </div>
  </div>
);

/* ===================== STEPS ===================== */

const StepOne = ({
  formData,
  setFormData,
  sendOtp,
  sendingOtp,
  otpSent,
  otpRefs,
  handleOtpChange,
  onNext,
}) => (
  <div className="space-y-4">
    <Input label="First Name" onChange={(e) =>
      setFormData({ ...formData, firstName: e.target.value })
    } />
    <Input label="Last Name" onChange={(e) =>
      setFormData({ ...formData, lastName: e.target.value })
    } />

    <div>
      <label className="label">Phone Number</label>
      <div className="flex gap-2">
        <input
          maxLength={10}
          className="input flex-1"
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        <button onClick={sendOtp} className="btn-primary">
          {sendingOtp ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
        </button>
      </div>
    </div>

    {otpSent && (
      <div className="flex justify-center gap-3">
        {formData.otp.map((_, i) => (
          <input
            key={i}
            ref={(el) => (otpRefs.current[i] = el)}
            maxLength={1}
            className="otp-box"
            onChange={(e) => handleOtpChange(e.target.value, i)}
          />
        ))}
      </div>
    )}

    <button disabled={!otpSent} onClick={onNext} className="btn-primary w-full">
      Continue
    </button>
  </div>
);

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
        label="Aadhaar Front"
        onChange={(e) =>
          setFormData({ ...formData, aadhaarFront: e.target.files[0] })
        }
      />

      <FileInput
        label="Aadhaar Back"
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

const StepThree = ({ formData, setFormData, onBack, onSubmit }) => (
  <div className="space-y-4">
    <select
      className="input"
      value={formData.bookType}
      onChange={(e) =>
        setFormData({ ...formData, bookType: e.target.value })
      }
    >
      <option value="">Select book</option>
      <option>Demand 999</option>
      <option>King Exchange</option>
      <option>Mahakar Book</option>
    </select>

    <div className="flex gap-3">
      <button onClick={onBack} className="btn-secondary w-1/2">Back</button>
      <button disabled={!formData.bookType} onClick={onSubmit} className="btn-success w-1/2">
        Submit
      </button>
    </div>
  </div>
);

const Footer = () => (
  <div className="text-center text-[10px] text-gray-400 mt-6 px-4 pb-4">
    Regulated by RBI <br /> SSA Finserv Private Limited
  </div>
);

/* ===================== REUSABLE ===================== */

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

const GlobalStyles = () => (
  <style>{`
    .label { font-size: 12px; font-weight: 600; }
    .input {
      width: 100%;
      padding: 0.7rem;
      border: 1px solid #d1d5db;
      border-radius: 0.7rem;
    }
    .btn-primary {
      background: #facc15;
      padding: 0.7rem;
      border-radius: 0.7rem;
      font-weight: 600;
    }
    .btn-secondary {
      background: #e5e7eb;
      padding: 0.7rem;
      border-radius: 0.7rem;
    }
    .btn-success {
      background: #22c55e;
      color: white;
      padding: 0.7rem;
      border-radius: 0.7rem;
      font-weight: 600;
    }
    .otp-box {
      width: 3rem;
      height: 3rem;
      text-align: center;
      border-radius: 0.6rem;
      border: 1px solid #d1d5db;
    }
  `}</style>
);

export default LoanApplicationForm;
