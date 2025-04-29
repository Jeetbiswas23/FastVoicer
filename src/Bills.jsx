import React, { useState } from "react";

const tabs = ["Draft", "Approve", "Ready for payment", "Paid"];

const Bills = () => {
  const [activeTab, setActiveTab] = useState("Draft");

  const renderTableHeaders = () => {
    if (activeTab === "Approve") {
      return (
        <thead className="text-gray-500 uppercase text-xs">
          <tr>
            <th className="p-2">Vendor / Pay to</th>
            <th className="p-2">Status</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Method</th>
            <th className="p-2">Due date</th>
            <th className="p-2">Invoice #</th>
            <th className="p-2">Memo</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
      );
    } else if (activeTab === "Ready for payment") {
      return (
        <thead className="text-gray-500 uppercase text-xs">
          <tr>
            <th className="p-2">Vendor / Pay to</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Method</th>
            <th className="p-2">Due date</th>
            <th className="p-2">Invoice #</th>
            <th className="p-2">Memo</th>
          </tr>
        </thead>
      );
    } else if (activeTab === "Paid") {
      return (
        <thead className="text-gray-500 uppercase text-xs">
          <tr>
            <th className="p-2">Vendor / Pay to</th>
            <th className="p-2">Paid date</th>
            <th className="p-2">Invoice #</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Method</th>
            <th className="p-2">Memo</th>
          </tr>
        </thead>
      );
    }
    return (
      <thead className="text-gray-500 uppercase text-xs">
        <tr>
          <th className="p-2">Vendor / Pay to</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Method</th>
          <th className="p-2">Due date</th>
          <th className="p-2">Invoice #</th>
          <th className="p-2">GL Category</th>
        </tr>
      </thead>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
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

        <div className="text-sm text-gray-500">
          Forward invoices to <span className="font-medium text-black">bills@ap.fastvoicer.com</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse">
          {renderTableHeaders()}
          <tbody>
            <tr className="text-center text-gray-400">
              <td colSpan={activeTab === "Approve" ? "8" : activeTab === "Ready for payment" ? "6" : activeTab === "Paid" ? "6" : "6"} className="p-6">
                No bills to display
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bills;