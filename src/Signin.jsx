import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      alert("Email already exists! Redirecting to login.");
      navigate("/login");
    } else {
      const newUser = { name, email, password };
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
      alert("Account created successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Logo */}
      <div className="absolute top-8 left-6">
        <span
          className="text-black font-extrabold text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          FastVoicer
        </span>
      </div>
      {/* Content Section */}
      <div className="flex w-3/4 max-w-6xl">
        {/* Welcome Section */}
        <div className="w-1/2 flex flex-col justify-center pr-8">
          <h1 className="text-4xl font-extrabold text-black mb-4">Welcome to FastVoicer</h1>
          <p className="text-gray-700 text-lg">
            Join us and simplify your invoicing process. Create professional invoices in seconds.
          </p>
        </div>
        {/* Sign-in Form */}
        <form
          onSubmit={handleSignin}
          className="w-1/2 p-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            Sign Up
          </button>
          <button
            className="mt-4 text-black font-medium hover:underline w-full text-center"
            onClick={() => navigate("/login")}
          >
            Already have an account? Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;