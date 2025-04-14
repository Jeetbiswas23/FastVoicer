import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");
  const [name, setName] = useState("");
  const [plan, setPlan] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (step === 4) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const updatedUser = { ...currentUser, onboardingComplete: true };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser)); // Mark onboarding as complete
      navigate("/dashboard"); // Redirect to dashboard after onboarding
    } else {
      setStep(step + 1); // Move to the next step
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {step === 1 && (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg border border-black">
          <h2 className="text-3xl font-bold mb-4 text-black">Let's get started!</h2>
          <p className="text-gray-700 mb-6">
            Please share a few details to help us set up your account.
          </p>
          <div className="mb-4">
            <button
              className={`w-full p-4 border rounded-lg mb-4 ${
                accountType === "Individual" ? "border-black bg-black text-white" : "border-gray-300"
              }`}
              onClick={() => setAccountType("Individual")}
            >
              <h3 className="font-bold">Individual</h3>
              <p className="text-gray-600">Freelancer or sole proprietor</p>
            </button>
            <button
              className={`w-full p-4 border rounded-lg ${
                accountType === "Business" ? "border-black bg-black text-white" : "border-gray-300"
              }`}
              onClick={() => setAccountType("Business")}
            >
              <h3 className="font-bold">Business</h3>
              <p className="text-gray-600">Registered company or entity</p>
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            onClick={handleContinue}
            disabled={!accountType || !name}
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg border border-black">
          <h2 className="text-3xl font-bold mb-4 text-black">Choose your plan</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "Free", price: "$0.00", features: ["Unlimited invoices", "5 bills/month"] },
              { name: "Growth", price: "$150.00", features: ["15 bills/month", "Automated QBO/Xero sync"] },
              { name: "Company", price: "$300.00", features: ["30 bills/month", "Vendor invoice generator"] },
              { name: "Enterprise", price: "Custom", features: ["Unlimited bills", "Custom wallet"] },
            ].map((planOption) => (
              <button
                key={planOption.name}
                className={`w-full p-4 border rounded-lg ${
                  plan === planOption.name ? "border-black bg-black text-white" : "border-gray-300"
                }`}
                onClick={() => setPlan(planOption.name)}
              >
                <h3 className="font-bold">{planOption.name}</h3>
                <p className="text-gray-600">{planOption.price}</p>
                <ul className="text-gray-500 text-sm mt-2">
                  {planOption.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition mt-4"
            onClick={handleContinue}
            disabled={!plan}
          >
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg border border-black">
          <h2 className="text-3xl font-bold mb-4 text-black">Connect your accounting system</h2>
          <div className="grid grid-cols-1 gap-4">
            <button className="w-full p-4 border rounded-lg hover:bg-black hover:text-white transition">
              QuickBooks
            </button>
            <button className="w-full p-4 border rounded-lg hover:bg-black hover:text-white transition">
              Xero
            </button>
            <button className="w-full p-4 border rounded-lg hover:bg-black hover:text-white transition">
              I use something else
            </button>
            <button className="w-full p-4 border rounded-lg hover:bg-black hover:text-white transition">
              I don't use one
            </button>
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition mt-4"
            onClick={handleContinue}
          >
            Continue
          </button>
          <button
            className="w-full text-gray-600 py-2 rounded-lg hover:underline mt-2"
            onClick={handleContinue}
          >
            I'll do it later
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg border border-black text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">You're ready to go! 🎉</h2>
          <p className="text-gray-600 mb-6">Create an invoice to get started.</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => navigate("/dashboard")} // Redirect to Dashboard
            >
              Create an invoice
            </button>
            <button
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => navigate("/dashboard")} // Redirect to Dashboard
            >
              Add a bill
            </button>
            <button
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => navigate("/dashboard")} // Redirect to Dashboard
            >
              Transfer funds
            </button>
            <button
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => navigate("/dashboard")} // Redirect to Dashboard
            >
              Create flexible payment option
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;