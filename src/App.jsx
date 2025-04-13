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
      {/* ...existing code... */}
    </div>
  );
}

export default App;
