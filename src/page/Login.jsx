import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👁️ ICONS
import { loginAdminThunk } from "../Store/Slice/authSlice";
import LoginImage from "../assets/loginImage.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false); // 👈 NEW STATE

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginAdminThunk({
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">

      {/* ================= LEFT IMAGE ================= */}
      <div className="relative hidden md:block w-full h-full">
        <img
          src={LoginImage}
          alt="Login"
          className="w-full h-full object-fill"
        />
      </div>

      {/* ================= RIGHT FORM ================= */}
      <div className="flex items-center justify-center px-6 md:px-20 bg-[#eef3fb]">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold text-blue-600 text-center">
            Login Account
          </h2>

          <p className="text-xs text-gray-400 text-center mt-2">
            Enter your email and password to continue
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {error && (
              <p className="text-red-600 text-sm text-center">
                {error}
              </p>
            )}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="w-full px-4 py-3 border border-gray-200 rounded
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />

            {/* PASSWORD WITH SHOW/HIDE ICON */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-200 rounded
                           focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2
                           text-gray-500 hover:text-blue-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* REMEMBER ME */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Keep me signed in
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-full
                         font-semibold tracking-wide hover:bg-blue-700
                         transition disabled:opacity-60"
            >
              {loading ? "LOGGING IN..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
