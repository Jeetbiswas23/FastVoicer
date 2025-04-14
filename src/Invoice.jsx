import React, { useState } from "react";

const tabs = ["Draft", "Unpaid", "Paid", "Void"];

const Invoice = () => {
  const [activeTab, setActiveTab] = useState("Draft");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Draft":
        return (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <h2 className="text-xl font-semibold mb-2">Create an invoice</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              Let customers pay how they want while you receive what you want.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                +  Create invoice
              </button>
              <button className="text-sm text-gray-700 hover:underline">
                Learn more
              </button>
            </div>
          </div>
        );
      case "Unpaid":
        return (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <h2 className="text-xl font-semibold mb-2">No invoices to show yet</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              Create an invoice to get started with payments.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Create invoice
              </button>
              <button className="text-sm text-gray-700 hover:underline">
                Learn more
              </button>
            </div>
          </div>
        );
      case "Paid":
        return (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <h2 className="text-xl font-semibold mb-2">No invoices to show yet</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              Once you receive payments, they will show up here.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Create invoice
              </button>
              <button className="text-sm text-gray-700 hover:underline">
                Learn more
              </button>
            </div>
          </div>
        );
      case "Void":
        return (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <h2 className="text-xl font-semibold mb-2">No voided invoices</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              Voided invoices will be displayed here.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Create invoice
              </button>
              <button className="text-sm text-gray-700 hover:underline">
                Learn more
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Invoices</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Create invoice
        </button>
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

      <hr className="mb-10" />

      {/* Tab Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Invoice;