import React, { useState } from "react";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-3xl font-semibold text-gray-800 mb-4">Contacts</div>

      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm mb-6 flex items-center justify-between">
        <div>
          <p className="font-medium">✨ Manage your contacts efficiently</p>
          <p className="text-sm text-gray-600">
            Keep track of your vendors and clients in one place for seamless transactions.
          </p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Add contact
        </button>
      </div>

      <div className="flex space-x-4 border-b border-gray-300 mb-8">
        <button
          className={`pb-2 font-medium transition duration-300 ease-in-out ${
            activeTab === "All" ? "text-gray-800 border-b-2 border-black" : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`pb-2 font-medium transition duration-300 ease-in-out ${
            activeTab === "Vendors" ? "text-gray-800 border-b-2 border-black" : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("Vendors")}
        >
          Vendors
        </button>
      </div>

      {activeTab === "All" ? (
        <div className="flex flex-col items-center justify-center text-center mt-24">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No contacts available</h2>
          <p className="text-gray-600 max-w-md mb-4">
            Add your vendors and clients to manage your transactions seamlessly.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 ease-in-out">
            + Add contact
          </button>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-xl font-semibold mb-2">Start adding contacts</h2>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Add your vendors to keep track of your transactions.
          </p>

          <div className="flex justify-center items-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out">
              + Add contact
            </button>
            <a href="#" className="text-blue-600 hover:underline transition duration-300 ease-in-out">Learn more</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;