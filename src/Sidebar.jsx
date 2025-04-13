
import React from "react";

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-semibold mb-4">FastVoicer</h2>
      <ul>
        <li className="mb-2">Dashboard</li>
        <li className="mb-2">Invoices</li>
        <li className="mb-2">Settings</li>
      </ul>
    </div>
  );
}