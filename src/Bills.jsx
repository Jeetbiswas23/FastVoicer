import React, { useState } from "react";

const tabs = ["Draft", "Approve", "Ready for payment", "Paid"];

const Bills = () => {
  const [activeTab, setActiveTab] = useState("Draft");

  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Bills</h1>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">
            ⇄ Transfer funds
          </button>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            + Add bill
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 text-sm font-medium mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-1 pb-2 ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
            <span className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-500 mb-4">
        Forward invoices to <span className="font-medium text-black">bills@ap.fastvoicer.com</span>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead className="text-gray-500 uppercase text-xs"> {/* Adjusted text size */}
          <tr>
            <th className="p-2">Vendor / Pay to</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Method</th>
            <th className="p-2">Due date</th>
            <th className="p-2">Invoice #</th>
            <th className="p-2">GL Category</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-gray-400">
            <td colSpan="6" className="p-6">No bills to display</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bills;