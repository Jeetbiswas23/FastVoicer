import React from "react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/60 backdrop-blur-md shadow-md rounded-full px-6 py-2 w-[95%] max-w-6xl flex items-center justify-between">
        {/* Logo and Left Links */}
        <div className="flex items-center gap-6">
          <span className="text-black font-bold text-lg">FastVoicer</span>
          <a href="#" className="text-black font-medium">Teams</a>
          <a href="#" className="text-black font-medium">About</a>
          <a href="#" className="text-black font-medium">Blog</a>
          <a href="#" className="text-black font-medium">Guides</a>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-black font-medium">Log in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Generate an invoice
          </button>
        </div>
      </nav>

      {/* Middle Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 text-7xl font-extrabold leading-tight drop-shadow-lg">
          Create.
        </h1>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 text-7xl font-extrabold leading-tight drop-shadow-lg mt-2">
          Send. Get Paid.
        </h1>
        <p className="text-black text-lg mt-6 max-w-2xl">
          Simplify your invoicing process with FastVoicer. <br />
          Create professional invoices in seconds.
        </p>
        <button className="mt-8 bg-black text-white px-8 py-4 text-lg rounded-full hover:bg-gray-800 transition">
          Create an Invoice
        </button>
      </div>
      {/* ...existing code... */}
    </div>
  );
}

export default App;
