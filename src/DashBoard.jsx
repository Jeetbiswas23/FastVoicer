import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">FastVoicer</h1>
          <nav className="space-y-4 text-sm font-medium">
            <div className="text-black flex items-center gap-2">
              <span>📄</span> Invoices
            </div>
            <div className="text-gray-500 hover:text-black cursor-pointer">💸 Payments</div>
            <div className="text-gray-500 hover:text-black cursor-pointer">📋 Bills</div>
            <div className="text-gray-500 hover:text-black cursor-pointer">🔗 Contacts</div>
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
      <main className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Invoices</h2>
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-900">
            Create invoice
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mt-6 text-sm font-medium text-gray-500">
          <button className="text-black border-b-2 border-black pb-2">Draft (0)</button>
          <button className="hover:text-black">Unpaid (0)</button>
          <button className="hover:text-black">Paid (0)</button>
          <button className="hover:text-black">Void (0)</button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center h-[60vh] text-center mt-12">
          <h3 className="text-xl font-semibold">Create an invoice</h3>
          <p className="text-gray-500 mb-6">
            Let customers pay how they want while you receive what you want.
          </p>
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-900">
            + Create invoice
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
