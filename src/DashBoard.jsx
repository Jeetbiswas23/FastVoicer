import React, { useState } from "react";
import Invoice from "./Invoice";
import Payments from "./Payments";
import Bills from "./Bills";
import Contacts from "./Contacts";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Invoices");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const navigate = useNavigate(); // Hook for navigation

  const handleSignOut = () => {
    // Logic for signing out
    navigate("/"); // Redirect to home page
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Invoices":
        return <Invoice />;
      case "Payments":
        return <Payments />;
      case "Bills":
        return <Bills />;
      case "Contacts":
        return <Contacts />;
      default:
        return <h2 className="text-3xl font-semibold">Welcome</h2>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-5 flex flex-col justify-between h-screen overflow-hidden">
        <div>
          <h1 className="text-2xl font-bold mb-10">FastVoicer</h1>
          <nav className="space-y-6 text-base font-medium">
            <button
              className={`flex items-center gap-3 w-full text-left cursor-pointer ${
                activeTab === "Invoices" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Invoices")}
            >
              <span>📄</span> Invoices
            </button>
            <button
              className={`flex items-center gap-3 w-full text-left cursor-pointer ${
                activeTab === "Payments" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Payments")}
            >
              <span>💸</span> Payments
            </button>
            <button
              className={`flex items-center gap-3 w-full text-left cursor-pointer ${
                activeTab === "Bills" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Bills")}
            >
              <span>📋</span> Bills
            </button>
            <button
              className={`flex items-center gap-3 w-full text-left cursor-pointer ${
                activeTab === "Contacts" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Contacts")}
            >
              <span>🔗</span> Contacts
            </button>
          </nav>
        </div>
        <div className="relative text-sm text-gray-600 space-y-2">
          <div>Support</div>
          <div>Guides</div>
          <div>Settings</div>
          <div className="relative">
            <button
              className="w-full p-1 border rounded text-black hover:bg-gray-200 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Jeet
            </button>
            {dropdownOpen && (
              <div className="absolute bottom-full mb-2 w-full bg-white border rounded shadow-lg">
                <div className="p-2 text-black">Name: Jeet</div>
                <div className="p-2 text-black">Email: jeet@example.com</div>
                <button
                  className="w-full text-left p-2 bg-black text-white rounded hover:bg-gray-800 transition"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
