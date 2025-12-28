import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  SEND_OTP,
  VERIFY_OTP,
  APPLY_LOAN,
  CHECK_LOAN_STATUS,
  GET_LOAN_DETAILS,
} from "../../api/constant/constant";

/* ================= SEND OTP ================= */
export const sendOtpThunk = createAsyncThunk(
  "loan/sendOtp",
  async (phone, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(SEND_OTP, { phone });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || "OTP send failed");
    }
  }
);

/* ================= VERIFY OTP ================= */
export const verifyOtpThunk = createAsyncThunk(
  "loan/verifyOtp",
  async ({ phone, code }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(VERIFY_OTP, { phone, code });
      return res.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message || "Invalid OTP");
    }
  }
);

/* ================= APPLY LOAN ================= */
export const applyLoanThunk = createAsyncThunk(
  "loan/apply",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(APPLY_LOAN, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data; // { message, loanId }
    } catch (err) {
      return rejectWithValue(
        err?.response?.data?.message ||
        err?.response?.data ||
        "Loan submission failed"
      );
    }
  }
);

/* ================= LOAN DETAILS ================= */
export const getLoanDetailsByIdThunk = createAsyncThunk(
  "loan/detailsById",
  async (loanId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(GET_LOAN_DETAILS(loanId));
      return res.data;
    } catch {
      return rejectWithValue("Failed to fetch loan details");
    }
  }
);

/* ================= STATUS ================= */
export const checkLoanStatusThunk = createAsyncThunk(
  "loan/status",
  async (phone, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(CHECK_LOAN_STATUS(phone));
      return res.data;
    } catch {
      return rejectWithValue("Failed to fetch loan status");
    }
  }
);

/* ================= SLICE ================= */
const loanFlowSlice = createSlice({
  name: "loanFlow",

  initialState: {
    otpSent: false,
    otpVerified: false,
    loanSubmitted: false,

    loanStatus: "IDLE",
    statusResult: null,
    lastLoanId: null,

    sendingOtp: false,
    verifyingOtp: false,
    loading: false,

    error: null,
  },

  reducers: {
    resetLoanFlow: (state) => {
      state.otpSent = false;
      state.otpVerified = false;
      state.loanSubmitted = false;
      state.loanStatus = "IDLE";
      state.statusResult = null;
      state.lastLoanId = null;
      state.sendingOtp = false;
      state.verifyingOtp = false;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("username");
    },
  },

  extraReducers: (builder) => {
    builder

      /* SEND OTP */
      .addCase(sendOtpThunk.pending, (s) => {
        s.sendingOtp = true;
        s.error = null;
      })
      .addCase(sendOtpThunk.fulfilled, (s) => {
        s.sendingOtp = false;
        s.otpSent = true;
      })
      .addCase(sendOtpThunk.rejected, (s, a) => {
        s.sendingOtp = false;
        s.error = a.payload;
      })

      /* VERIFY OTP */
      .addCase(verifyOtpThunk.pending, (s) => {
        s.verifyingOtp = true;
        s.error = null;
      })
      .addCase(verifyOtpThunk.fulfilled, (s, a) => {
        s.verifyingOtp = false;
        s.otpVerified = true;

        const firstName = a.payload?.firstName?.trim();
        if (firstName) localStorage.setItem("username", firstName);
      })
      .addCase(verifyOtpThunk.rejected, (s, a) => {
        s.verifyingOtp = false;
        s.error = a.payload;
      })

      /* APPLY LOAN */
      .addCase(applyLoanThunk.pending, (s) => {
        s.loading = true;
        s.loanStatus = "PENDING";
        s.error = null;
      })
      .addCase(applyLoanThunk.fulfilled, (s, a) => {
        s.loading = false;
        s.loanSubmitted = true;
        s.loanStatus = "PENDING";
        s.lastLoanId = a.payload?.loanId;
      })
      .addCase(applyLoanThunk.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      /* LOAN DETAILS */
      .addCase(getLoanDetailsByIdThunk.fulfilled, (s, a) => {
        s.statusResult = a.payload;

        const firstName = a.payload?.firstName?.trim();
        if (firstName) localStorage.setItem("username", firstName);
      })

      /* STATUS */
      .addCase(checkLoanStatusThunk.fulfilled, (s, a) => {
        s.loanStatus = a.payload?.status;
        s.statusResult = a.payload;
      });
  },
});

export const { resetLoanFlow } = loanFlowSlice.actions;
export default loanFlowSlice.reducer;
