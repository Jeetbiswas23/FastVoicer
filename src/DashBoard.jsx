import React, { useState } from "react";
import Invoice from "./Invoice";
import Payments from "./Payments";
import Bills from "./Bills";
import Contacts from "./Contacts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Invoices");

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
          <h1 className="text-2xl font-bold mb-6">FastVoicer</h1>
          <nav className="space-y-4 text-sm font-medium">
            <div
              className={`flex items-center gap-2 cursor-pointer ${
                activeTab === "Invoices" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Invoices")}
            >
              <span>📄</span> Invoices
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "Payments" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Payments")}
            >
              💸 Payments
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "Bills" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Bills")}
            >
              📋 Bills
            </div>
            <div
              className={`cursor-pointer ${
                activeTab === "Contacts" ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab("Contacts")}
            >
              🔗 Contacts
            </div>
          </nav>
        </div>
        <div className="text-sm text-gray-600 space-y-2">
          <div>Support</div>
          <div>Guides</div>
          <div>Settings</div>
          <select className="w-full p-1 border rounded text-black">
            <option>Jeet</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
