
import React, { useState } from "react";

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="flex space-x-4">{children}</div>;
}

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      className={`px-4 py-2 rounded ${
        isActive ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}