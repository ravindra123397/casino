import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  GET_ALL_LOANS_ADMIN,
  APPROVE_LOAN,
  REJECT_LOAN,
  GET_LOAN_DETAILS,
} from "../../api/constant/constant";

/* ================= THUNKS ================= */

export const getAllLoansThunk = createAsyncThunk(
  "admin/loans",
  async () => {
    const res = await axiosInstance.get(GET_ALL_LOANS_ADMIN);
    return res.data.data;
  }
);

// export const approveLoanThunk = createAsyncThunk(
//   "admin/approveLoan",
//   async (loanId) => {
//     const res = await axiosInstance.put(APPROVE_LOAN(loanId));
//     return res.data;
//   }
// );
export const approveLoanThunk = createAsyncThunk(
  "admin/approveLoan",
  async (loanId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(APPROVE_LOAN(loanId));
      return res.data;
    } catch (err) {
      console.error("❌ APPROVE LOAN FAILED", err.response?.data);
      return rejectWithValue(err.response?.data || "Server error");
    }
  }
);

/* 🔴 MIS = RESTART (NOT REJECT) */
export const restartLoanThunk = createAsyncThunk(
  "admin/restartLoan",
  async ({ loanId, reasons }) => {
    const res = await axiosInstance.put(REJECT_LOAN(loanId), { reasons });
    return res.data;
  }
);

export const getLoanDetailsThunk = createAsyncThunk(
  "admin/loanDetails",
  async (loanId) => {
    const res = await axiosInstance.get(GET_LOAN_DETAILS(loanId));
    return res.data.data;
  }
);

/* ================= SLICE ================= */

const loanSlice = createSlice({
  name: "loan",
  initialState: {
    loans: [],
    selectedLoan: null,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllLoansThunk.pending, (s) => {
        s.loading = true;
      })
      .addCase(getAllLoansThunk.fulfilled, (s, a) => {
        s.loading = false;
        s.loans = a.payload;
      })
      .addCase(getLoanDetailsThunk.fulfilled, (s, a) => {
        s.selectedLoan = a.payload;
      });
  },
});

export default loanSlice.reducer;
