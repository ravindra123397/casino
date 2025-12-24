import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { LOGIN_ADMIN_URL } from "../../api/constant/constant";


/* =========================
   LOGIN THUNK
========================= */
export const loginAdminThunk = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(LOGIN_ADMIN_URL, payload);
      return res.data; // 👈 contains { token, admin }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

/* =========================
   SLICE
========================= */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: JSON.parse(localStorage.getItem("admin")) || null,
    token: localStorage.getItem("tokenId") || null,
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem("tokenId"),
  },

  reducers: {
    logout: (state) => {
      state.admin = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAdminThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginAdminThunk.fulfilled, (state, action) => {
        state.loading = false;

        // ✅ MATCHING BACKEND RESPONSE
        state.token = action.payload.token;
        state.admin = action.payload.admin;
        state.isAuthenticated = true;

        localStorage.setItem("tokenId", action.payload.token);
        localStorage.setItem(
          "admin",
          JSON.stringify(action.payload.admin)
        );
      })

      .addCase(loginAdminThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
