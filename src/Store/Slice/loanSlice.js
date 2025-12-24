import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { APPROVE_LOAN, CHECK_LOAN_STATUS, GET_ALL_LOANS_ADMIN, GET_LOAN_DETAILS, REJECT_LOAN } from "../../api/constant/constant";


/* ================= GET ALL ================= */
export const getAllLoansThunk = createAsyncThunk(
  "loan/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(GET_ALL_LOANS_ADMIN);
      return res.data;
    } catch (err) {
      return rejectWithValue("Failed to fetch loans");
    }
  }
);

/* ================= APPROVE ================= */
export const approveLoanThunk = createAsyncThunk(
  "loan/approve",
  async (loanId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(APPROVE_LOAN(loanId));
      return { loanId, data: res.data };
    } catch {
      return rejectWithValue("Approve failed");
    }
  }
);

/* ================= REJECT ================= */
export const rejectLoanThunk = createAsyncThunk(
  "loan/reject",
  async ({ loanId, reasons }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(REJECT_LOAN(loanId), { reasons });
      return { loanId, data: res.data };
    } catch {
      return rejectWithValue("Reject failed");
    }
  }
);

/* ================= DETAILS ================= */
export const getLoanDetailsThunk = createAsyncThunk(
  "loan/details",
  async (loanId) => {
    const res = await axiosInstance.get(GET_LOAN_DETAILS(loanId));
    return res.data;
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

const loanSlice = createSlice({
  name: "loan",
  initialState: {
    loans: [],
    selectedLoan: null,
    statusResult: null,
    loading: false,
    error: null,
  },

  reducers: {
    clearSelectedLoan: (state) => {
      state.selectedLoan = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllLoansThunk.pending, (s) => {
        s.loading = true;
      })
      .addCase(getAllLoansThunk.fulfilled, (s, a) => {
        s.loading = false;
        s.loans = a.payload;
      })
      .addCase(getAllLoansThunk.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(approveLoanThunk.fulfilled, (s, a) => {
        const i = s.loans.findIndex(l => l._id === a.payload.loanId);
        if (i !== -1) s.loans[i].status = "APPROVED";
      })

      .addCase(rejectLoanThunk.fulfilled, (s, a) => {
        const i = s.loans.findIndex(l => l._id === a.payload.loanId);
        if (i !== -1) s.loans[i].status = "RESTART";
      })

      .addCase(getLoanDetailsThunk.fulfilled, (s, a) => {
        s.selectedLoan = a.payload;
      })

      .addCase(checkLoanStatusThunk.fulfilled, (s, a) => {
        s.statusResult = a.payload;
      });
  },
});

export const { clearSelectedLoan } = loanSlice.actions;
export default loanSlice.reducer;
