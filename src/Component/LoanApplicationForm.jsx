import React, { useState, useRef } from "react";

const LoanApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    otp: ["", "", "", ""],
    amount: 10000,
    aadhaarFront: null,
    aadhaarBack: null,
    panNumber: "",
    panFile: null,
  });

  const otpRefs = useRef([]);

  /* 🔹 OTP HANDLER */
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const otp = [...formData.otp];
    otp[index] = value;
    setFormData({ ...formData, otp });

    if (value && index < 3) otpRefs.current[index + 1].focus();
  };

  /* 🔹 SEND OTP */
  const sendOtp = () => {
    if (formData.phone.length !== 10) {
      alert("Please enter valid phone number");
      return;
    }

    setSendingOtp(true);

    setTimeout(() => {
      setSendingOtp(false);
      setOtpSent(true);
      alert("OTP sent successfully");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Loan Application
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Step {step} of 2
        </p>

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="space-y-4">

            {/* FIRST NAME */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="Enter first name"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="Enter last name"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>

            {/* PHONE + SEND OTP */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <div className="flex gap-2 mt-1">
                <input
                  type="tel"
                  maxLength={10}
                  className="input flex-1"
                  placeholder="Enter phone number"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={sendingOtp}
                  className="px-4 rounded-lg bg-blue-600 text-white text-sm
                             hover:bg-blue-700 disabled:opacity-50"
                >
                  {sendingOtp
                    ? "Sending..."
                    : otpSent
                    ? "Resend OTP"
                    : "Send OTP"}
                </button>
              </div>
            </div>

            {/* OTP */}
            {otpSent && (
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Enter OTP
                </label>
                <div className="flex justify-center gap-3">
                  {formData.otp.map((_, i) => (
                    <input
                      key={i}
                      ref={(el) => (otpRefs.current[i] = el)}
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg font-semibold border rounded-lg"
                      onChange={(e) =>
                        handleOtpChange(e.target.value, i)
                      }
                    />
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setStep(2)}
              disabled={!otpSent}
              className="w-full bg-blue-600 text-white py-2 rounded-lg
                         hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2 (UNCHANGED) */}
       {step === 2 && (
          <div className="space-y-5">

            {/* LOAN AMOUNT */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Select Loan Amount
              </label>
              <p className="text-lg font-semibold text-blue-600 mb-1">
                ₹ {formData.amount.toLocaleString()}
              </p>
              <input
                type="range"
                min="10000"
                max="50000"
                step="1000"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full"
              />
            </div>

            {/* AADHAAR FRONT */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Aadhaar Card (Front)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, aadhaarFront: e.target.files[0] })
                }
                className="file-input"
              />
            </div>

            {/* AADHAAR BACK */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Aadhaar Card (Back)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, aadhaarBack: e.target.files[0] })
                }
                className="file-input"
              />
            </div>

            {/* PAN NUMBER */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                PAN Card Number
              </label>
              <input
                type="text"
                placeholder="ABCDE1234F"
                className="input uppercase"
                onChange={(e) =>
                  setFormData({ ...formData, panNumber: e.target.value })
                }
              />
            </div>

            {/* PAN FILE */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                PAN Card Upload
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, panFile: e.target.files[0] })
                }
                className="file-input"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setStep(1)}
                className="w-1/2 border py-2 rounded-lg"
              >
                Previous
              </button>
              <button className="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {/* COMMON INPUT STYLES */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            margin-top: 0.25rem;
          }
          .file-input {
            width: 100%;
            border: 1px dashed #d1d5db;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background: #f9fafb;
            margin-top: 0.25rem;
          }
        `}
      </style>
    </div>

      
  );
};

export default LoanApplicationForm;
