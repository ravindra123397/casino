// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../api/axiosInstance";
// import {
//   SEND_OTP,
//   VERIFY_OTP,
//   APPLY_LOAN,
//   CHECK_LOAN_STATUS,
//   GET_LOAN_DETAILS,
// } from "../../api/constant/constant";

// /* ================= OTP ================= */
// export const sendOtpThunk = createAsyncThunk(
//   "loan/sendOtp",
//   async (phone, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(SEND_OTP, { phone });
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "OTP failed");
//     }
//   }
// );

// export const verifyOtpThunk = createAsyncThunk(
//   "loan/verifyOtp",
//   async ({ phone, code }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(VERIFY_OTP, { phone, code });
//       return res.data;
//     } catch {
//       return rejectWithValue("Invalid OTP");
//     }
//   }
// );

// export const applyLoanThunk = createAsyncThunk(
//   "loan/apply",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(APPLY_LOAN, formData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "Apply failed");
//     }
//   }
// );

// export const checkLoanStatusThunk = createAsyncThunk(
//   "loan/status",
//   async (phone) => {
//     const res = await axiosInstance.get(CHECK_LOAN_STATUS(phone));
//     return res.data;
//   }
// );

// export const getLoanDetailsByIdThunk = createAsyncThunk(
//   "loan/details",
//   async (loanId) => {
//     const res = await axiosInstance.get(GET_LOAN_DETAILS(loanId));
//     return res.data;
//   }
// );

// /* ================= SLICE ================= */
// const loanFlowSlice = createSlice({
//   name: "loanFlow",
//   initialState: {
//     phone: null,

//     otpSent: false,
//     otpVerified: false,

//     loanSubmitted: false,
//     loanStatus: "IDLE",
//     nextStep: null,
//     statusResult: null,
//     lastLoanId: null,

//     sendingOtp: false,
//     verifyingOtp: false,
//     loading: false,
//     error: null,
//   },

//   reducers: {
//     setPhone: (state, action) => {
//       state.phone = action.payload;
//     },

//     resetLoanFlow: (state) => {
//       state.phone = null;
//       state.otpSent = false;
//       state.otpVerified = false;
//       state.loanSubmitted = false;
//       state.loanStatus = "IDLE";
//       state.nextStep = null;
//       state.statusResult = null;
//       state.lastLoanId = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(sendOtpThunk.fulfilled, (s) => {
//         s.otpSent = true;
//       })
//       .addCase(verifyOtpThunk.fulfilled, (s) => {
//         s.otpVerified = true;
//       })
//       .addCase(applyLoanThunk.pending, (s) => {
//         s.loading = true;
//         s.loanStatus = "PENDING";
//       })
//       .addCase(applyLoanThunk.fulfilled, (s, a) => {
//         s.loading = false;
//         s.loanSubmitted = true;
//         s.loanStatus = a.payload.status;
//         s.lastLoanId = a.payload.data?._id;
//       })
//       .addCase(checkLoanStatusThunk.fulfilled, (s, a) => {
//         s.loanStatus = a.payload.status;
//         s.nextStep = a.payload.nextStep;
//         s.statusResult = a.payload.data;
//       })
//       .addCase(getLoanDetailsByIdThunk.fulfilled, (s, a) => {
//         s.statusResult = a.payload.data;
//       });
//   },
// });

// /* ✅ VERY IMPORTANT */
// export const { resetLoanFlow, setPhone } = loanFlowSlice.actions;
// export default loanFlowSlice.reducer;















// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../api/axiosInstance";
// import {
//   SEND_OTP,
//   VERIFY_OTP,
//   APPLY_LOAN,
//   CHECK_LOAN_STATUS,
// } from "../../api/constant/constant";

// /* ================= OTP ================= */

// export const sendOtpThunk = createAsyncThunk(
//   "loan/sendOtp",
//   async (phone, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(SEND_OTP, { phone });
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "OTP failed");
//     }
//   }
// );

// export const verifyOtpThunk = createAsyncThunk(
//   "loan/verifyOtp",
//   async ({ phone, code }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(VERIFY_OTP, { phone, code });
//       return res.data;
//     } catch {
//       return rejectWithValue("Invalid OTP");
//     }
//   }
// );

// /* ================= APPLY ================= */

// export const applyLoanThunk = createAsyncThunk(
//   "loan/apply",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post(APPLY_LOAN, formData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "Apply failed");
//     }
//   }
// );

// /* ================= STATUS ================= */

// export const checkLoanStatusThunk = createAsyncThunk(
//   "loan/status",
//   async (phone) => {
//     const res = await axiosInstance.get(CHECK_LOAN_STATUS(phone));
//     return res.data;
//   }
// );

// /* ================= SLICE ================= */

// const loanFlowSlice = createSlice({
//   name: "loanFlow",

//   initialState: {
//     phone: null,

//     otpSent: false,
//     otpVerified: false,

//     loanStatus: "IDLE", // IDLE | PENDING | APPROVED | RESTART
//     statusResult: null,

//     sendingOtp: false,
//     verifyingOtp: false,
//     loading: false,

//     error: null,
//   },

//   reducers: {
//     setPhone: (state, action) => {
//       state.phone = action.payload;
//     },

//     resetLoanFlow: (state) => {
//       state.phone = null;
//       state.otpSent = false;
//       state.otpVerified = false;
//       state.loanStatus = "IDLE";
//       state.statusResult = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },

//   extraReducers: (builder) => {
//     builder

//       /* SEND OTP */
//       .addCase(sendOtpThunk.pending, (s) => {
//         s.sendingOtp = true;
//         s.error = null;
//       })
//       .addCase(sendOtpThunk.fulfilled, (s) => {
//         s.sendingOtp = false;
//         s.otpSent = true;
//       })

//       /* VERIFY OTP */
//       .addCase(verifyOtpThunk.pending, (s) => {
//         s.verifyingOtp = true;
//       })
//       .addCase(verifyOtpThunk.fulfilled, (s) => {
//         s.verifyingOtp = false;
//         s.otpVerified = true;

//         // ✅ SAVE PHONE AFTER OTP VERIFY
//         if (s.phone) {
//           localStorage.setItem("loan_phone", s.phone);
//         }
//       })

//       /* APPLY LOAN */
//       .addCase(applyLoanThunk.pending, (s) => {
//         s.loading = true;
//         s.loanStatus = "PENDING";
//       })
//       .addCase(applyLoanThunk.fulfilled, (s) => {
//         s.loading = false;
//         s.loanStatus = "PENDING";
//       })

//       /* CHECK STATUS */
//       .addCase(checkLoanStatusThunk.fulfilled, (s, a) => {
//         // ❌ NO LOAN FOUND
//         if (a.payload?.success === false) {
//           s.loanStatus = "IDLE";
//           s.statusResult = null;
//           return;
//         }

//         // ✅ LOAN EXISTS
//         s.loanStatus = a.payload.status;
//         s.statusResult = a.payload.data;
//       });
//   },
// });

// export const { resetLoanFlow, setPhone } = loanFlowSlice.actions;
// export default loanFlowSlice.reducer;











import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  SEND_OTP,
  VERIFY_OTP,
  APPLY_LOAN,
  CHECK_LOAN_STATUS,
} from "../../api/constant/constant";

/* ================= OTP ================= */
export const sendOtpThunk = createAsyncThunk(
  "loan/sendOtp",
  async (phone, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(SEND_OTP, { phone });
      return res.data;
    } catch (e) {
      return rejectWithValue("OTP failed");
    }
  }
);

export const verifyOtpThunk = createAsyncThunk(
  "loan/verifyOtp",
  async ({ phone, code }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(VERIFY_OTP, { phone, code });
      return res.data;
    } catch {
      return rejectWithValue("Invalid OTP");
    }
  }
);

/* ================= APPLY (🔥 MAIN FIX) ================= */
export const applyLoanThunk = createAsyncThunk(
  "loan/apply",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(APPLY_LOAN, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // 🔥 IMPORTANT
      if (res.data?.data) return res.data;

      return rejectWithValue(res.data?.message || "Apply failed");
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Apply failed");
    }
  }
);

/* ================= STATUS ================= */
export const checkLoanStatusThunk = createAsyncThunk(
  "loan/status",
  async (phone) => {
    const res = await axiosInstance.get(CHECK_LOAN_STATUS(phone));
    return res.data;
  }
);

/* ================= SLICE ================= */
const loanFlowSlice = createSlice({
  name: "loanFlow",
  initialState: {
    phone: null,
    otpSent: false,
    otpVerified: false,
    loanStatus: "IDLE",
    statusResult: null,
    sendingOtp: false,
    verifyingOtp: false,
    loading: false,
    error: null,
  },

  reducers: {
    setPhone: (s, a) => {
      s.phone = a.payload;
    },
    resetLoanFlow: (s) => {
      s.phone = null;
      s.loanStatus = "IDLE";
      s.statusResult = null;
      s.error = null;
    },
  },

  extraReducers: (b) => {
    b
      .addCase(sendOtpThunk.pending, (s) => {
        s.sendingOtp = true;
      })
      .addCase(sendOtpThunk.fulfilled, (s) => {
        s.sendingOtp = false;
        s.otpSent = true;
      })

      .addCase(verifyOtpThunk.fulfilled, (s) => {
        s.otpVerified = true;
      })

      .addCase(applyLoanThunk.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(applyLoanThunk.fulfilled, (s, a) => {
        s.loading = false;
        s.loanStatus = a.payload.status;
        s.statusResult = a.payload.data;
        s.error = null;
      })
      .addCase(applyLoanThunk.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(checkLoanStatusThunk.fulfilled, (s, a) => {
        if (a.payload?.data) {
          s.loanStatus = a.payload.status;
          s.statusResult = a.payload.data;
        }
      });
  },
});

export const { resetLoanFlow, setPhone } = loanFlowSlice.actions;
export default loanFlowSlice.reducer;
