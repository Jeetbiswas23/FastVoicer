import React from "react";

const PaymentsTransfer = () => {
  return (
    <div className="p-6 bg-white min-h-screen text-gray-800">
      {/* Transfer Card */}
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

      {/* Start First Transfer Section */}
      <div className="text-center mt-20">
        <div className="relative w-32 h-10 flex items-center justify-center mb-4">
          <div className="absolute w-full h-full animate-oscillate">
            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-200" />
              <div className="w-10 h-10 rounded-full bg-blue-300" />
              <div className="w-10 h-10 rounded-full bg-blue-500" />
              <div className="w-10 h-10 rounded-full bg-green-400" />
              <div className="w-10 h-10 rounded-full bg-gray-300" />
            </div>
          </div>
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
  );
};

export default PaymentsTransfer;