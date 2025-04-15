import React, { useState } from "react";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("Receive");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-3xl font-semibold text-gray-800 mb-4">Payments</div>

      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm mb-6 flex items-center justify-between">
        <div>
          <p className="font-medium">✨ Expand your payment options and get paid faster</p>
          <p className="text-sm text-gray-600">
            Seamlessly receive payments directly to your preferred wallet or bank account, no matter how your clients choose to pay.
          </p>
        </div>
        <a href="#" className="text-blue-600 font-medium hover:underline">Activate &gt;</a>
      </div>

      <div className="flex space-x-4 border-b border-gray-300 mb-8">
        <button
          className={`pb-2 font-medium ${activeTab === "Receive" ? "text-gray-800 border-b-2 border-black" : "text-gray-500"}`}
          onClick={() => setActiveTab("Receive")}
        >
          Receive
        </button>
        <button
          className={`pb-2 font-medium ${activeTab === "Transfer" ? "text-gray-800 border-b-2 border-black" : "text-gray-500"}`}
          onClick={() => setActiveTab("Transfer")}
        >
          Transfer
        </button>
      </div>

      {activeTab === "Receive" ? (
        <div className="flex flex-col items-center justify-center text-center mt-24">
          <div className="relative w-32 h-10 flex items-center justify-center mb-6">
            <div className="absolute w-full h-full animate-oscillate">
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-green-200 rounded-full"></div>
                <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                <div className="w-10 h-10 bg-green-400 rounded-full"></div>
                <div className="w-10 h-10 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Add flexible payment options</h2>
          <p className="text-gray-600 max-w-md mb-4">
            Choose how you want to get paid and we’ll create multiple ways for your clients to pay you
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            + Add flexible payment option
          </button>
          <a href="#" className="text-sm text-blue-600 mt-2 hover:underline">Learn more</a>
        </div>
      ) : (
        <div className="p-6 bg-white min-h-screen text-gray-800">
          <div className="bg-white border p-4 rounded-lg shadow-sm w-full max-w-sm mb-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  💱
                </div>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">US</span>
              </div>
              <button className="text-sm text-blue-600 hover:underline">Activate</button>
            </div>
            <div>
              <p className="font-medium">Transfer funds</p>
              <p className="text-sm text-gray-600">
                Send funds between your bank and crypto wallets or swap across chains
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="flex justify-center space-x-3 mb-4 opacity-60">
              <div className="w-10 h-10 rounded-full bg-green-200" />
              <div className="w-10 h-10 rounded-full bg-blue-300" />
              <div className="w-10 h-10 rounded-full bg-blue-500" />
              <div className="w-10 h-10 rounded-full bg-green-400" />
              <div className="w-10 h-10 rounded-full bg-gray-300" />
            </div>

            <h2 className="text-xl font-semibold mb-2">Start your first transfer</h2>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              Easily send funds between your bank and crypto wallets or swap across chains
            </p>

            <div className="flex justify-center items-center space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                + Transfer funds
              </button>
              <a href="#" className="text-blue-600 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;