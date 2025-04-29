import React, { useState } from "react";

export default function InvoiceCreator() {
  const [activeSection, setActiveSection] = useState("Company");
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    taxId: "",
    customerName: "",
    customerEmail: "",
    itemName: "",
    qty: 0,
    price: 0,
    note: "",
    discount: 0,
  });

  const [invoice, setInvoice] = useState({
    invoiceNo: "000002",
    issuedDate: "4/29/25",
    dueDate: "5/13/25",
    from: {
      name: "Jeet Biswas",
      email: "jeetbiswas764@gmail.com",
    },
    to: {
      name: "Client Name",
      address: ["Client Company", "Street Address", "City, State, ZIP", "Country"],
    },
    items: [{ description: "", quantity: "", price: "", amount: "" }],
    subtotal: 0,
    total: 0,
  });

  const [showForm, setShowForm] = useState(true); // State to toggle form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFromClick = () => {
    setActiveSection("Company");
    setFormData((prev) => ({
      ...prev,
      company: invoice.from.name,
      email: invoice.from.email,
      address: "", // Add logic to populate address if available
      city: "",
      state: "",
      zip: "",
      country: "",
      taxId: "",
    }));
  };

  const handleCloseForm = () => {
    setShowForm(false); // Only close the form
  };

  const renderForm = () => {
    switch (activeSection) {
      case "Company":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Company</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                <input
                  type="file"
                  name="logo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Enter ZIP"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID</label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  placeholder="Enter tax ID"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        );
      case "Customer":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="Search or add"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {/* ...other fields for address, city, state, zip, country, taxId... */}
            </div>
          </div>
        );
      case "Items":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item</label>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  placeholder="Item name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Qty</label>
                  <input
                    type="number"
                    name="qty"
                    value={formData.qty}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              {/* ...fields for note, discount... */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-8 gap-8 bg-gray-50 rounded-lg shadow-lg">
      {/* Left Panel - Dynamic Form */}
      {showForm && (
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md relative max-h-[90vh] overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            onClick={handleCloseForm}
          >
            &times;
          </button>
          <div className="h-full max-h-[80vh] overflow-y-auto pr-4">
            {renderForm()}
            <div className="flex justify-between mt-8">
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                Back
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Right Panel - Invoice Preview */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-6 relative">
        {/* From Section */}
        <div
          className="p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer"
          onClick={handleFromClick}
        >
          <p className="text-sm text-gray-500 mb-1">FROM</p>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white">
              J
            </div>
            <div>
              <p className="font-semibold">{invoice.from.name}</p>
              <p className="text-gray-600 text-sm">{invoice.from.email}</p>
            </div>
          </div>
        </div>

        {/* To Section */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-1">TO</p>
          <div className="text-sm text-gray-700">
            <p className="font-semibold">{invoice.to.name}</p>
            {invoice.to.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* Description/Price/Amount Section */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="border-t border-b py-4">
            <div className="grid grid-cols-3 font-semibold text-sm text-gray-500 mb-2">
              <p>DESCRIPTION</p>
              <p>PRICE</p>
              <p>AMOUNT</p>
            </div>
            <div className="grid grid-cols-3 text-sm text-gray-700">
              {invoice.items.map((item, index) => (
                <React.Fragment key={index}>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <p>{item.amount}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="text-right mt-4 text-sm">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-semibold">${invoice.subtotal.toFixed(2)}</p>
            <p className="text-gray-500 mt-2">Total</p>
            <p className="text-xl font-bold">${invoice.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}