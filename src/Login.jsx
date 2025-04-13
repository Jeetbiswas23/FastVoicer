import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("isLoggedIn", "true"); // Set login flag
      setMessage({ text: "Logged in successfully! Redirecting to dashboard.", type: "success" });
      setTimeout(() => navigate("/dashboard"), 2000);
    } else {
      setMessage({ text: "Invalid email or password. Please try again.", type: "error" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Logo */}
      <div className="absolute top-8 left-6">
        <span
          className="text-black font-extrabold text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          FastVoicer
        </span>
      </div>
      <h2 className="text-2xl font-bold mb-6">Log in</h2>
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <div className="mb-4">
          {message.text && (
            <p className={`text-center ${message.type === "error" ? "text-red-500" : "text-green-500"}`}>
              {message.text}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Log in
        </button>
      </form>
      <button
        className="mt-4 text-black font-medium hover:underline"
        onClick={() => navigate("/signup")}
      >
        Need an Account? Sign in
      </button>
    </div>
  );
}

export default Login;