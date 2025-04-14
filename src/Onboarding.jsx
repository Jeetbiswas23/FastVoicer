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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        {step === 1 && (
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Welcome to FastVoicer!</h2>
            <p className="text-gray-600 mb-8">
              Let's get started by setting up your account. Please share a few details to help us tailor your experience.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <button
                className={`p-4 border rounded-lg transition ${
                  accountType === "Individual"
                    ? "bg-black text-white border-black"
                    : "border-gray-300 hover:border-black"
                }`}
                onClick={() => setAccountType("Individual")}
              >
                <h3 className="font-bold text-lg">Individual</h3>
                <p className="text-sm text-gray-600">Freelancer or sole proprietor</p>
              </button>
              <button
                className={`p-4 border rounded-lg transition ${
                  accountType === "Business"
                    ? "bg-black text-white border-black"
                    : "border-gray-300 hover:border-black"
                }`}
                onClick={() => setAccountType("Business")}
              >
                <h3 className="font-bold text-lg">Business</h3>
                <p className="text-sm text-gray-600">Registered company or entity</p>
              </button>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={handleContinue}
              disabled={!accountType || !name}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Choose Your Plan</h2>
            <p className="text-gray-600 mb-8">
              Select a plan that best suits your needs. You can always change your plan later.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {[
                { name: "Free", price: "$0.00", features: ["Unlimited invoices", "5 bills/month"] },
                { name: "Growth", price: "$150.00", features: ["15 bills/month", "Automated QBO/Xero sync"] },
                { name: "Company", price: "$300.00", features: ["30 bills/month", "Vendor invoice generator"] },
                { name: "Enterprise", price: "Custom", features: ["Unlimited bills", "Custom wallet"] },
              ].map((planOption) => (
                <button
                  key={planOption.name}
                  className={`p-4 border rounded-lg transition ${
                    plan === planOption.name
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
                  onClick={() => setPlan(planOption.name)}
                >
                  <h3 className="font-bold text-lg">{planOption.name}</h3>
                  <p className="text-sm text-gray-600">{planOption.price}</p>
                  <ul className="text-sm text-gray-500 mt-2">
                    {planOption.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={handleContinue}
              disabled={!plan}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Connect Your Accounting System</h2>
            <p className="text-gray-600 mb-8">
              Integrate with your accounting system to streamline your workflow.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <button className="p-4 border rounded-lg hover:bg-black hover:text-white transition">
                QuickBooks
              </button>
              <button className="p-4 border rounded-lg hover:bg-black hover:text-white transition">
                Xero
              </button>
              <button className="p-4 border rounded-lg hover:bg-black hover:text-white transition">
                I use something else
              </button>
              <button className="p-4 border rounded-lg hover:bg-black hover:text-white transition">
                I don't use one
              </button>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={handleContinue}
            >
              Continue
            </button>
            <button
              className="w-full text-gray-600 py-3 rounded-lg hover:underline mt-2"
              onClick={handleContinue}
            >
              I'll do it later
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-6">You're Ready to Go! 🎉</h2>
            <p className="text-gray-600 mb-8">Create an invoice to get started.</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                onClick={() => navigate("/dashboard")}
              >
                Create an Invoice
              </button>
              <button
                className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                onClick={() => navigate("/dashboard")}
              >
                Add a Bill
              </button>
              <button
                className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                onClick={() => navigate("/dashboard")}
              >
                Transfer Funds
              </button>
              <button
                className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                onClick={() => navigate("/dashboard")}
              >
                Create Flexible Payment Option
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;