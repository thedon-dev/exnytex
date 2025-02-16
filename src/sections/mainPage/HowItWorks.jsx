import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "Register",
      desc: "Registration is avery easy process. Follow step by step and sign in.",
    },
    {
      step: "Start Trading",
      desc: "We support all types of cryptocurency.",
    },
    {
      step: "Type promo code",
      desc: "Use promo code to increase your income.",
    },
    {
      step: "Earn Money",
      desc: "Earn Money on our platform Safely and legally.",
    },
  ];
  return (
    <div className="px-[5%] lg:px-[10%] py-20 text-white">
      <div className="2xl:container mx-auto">
        <h1 className="text-5xl font-bold text-center">
          How It <span className="text-[#80eb15]">Works</span>
          <div className="flex"></div>
        </h1>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-3">
          {steps.map((stp, index) => (
            <div className="p-5 border border-[#80eb15] text-center rounded-lg">
              <h4 className="text-2xl font-semibold">{stp.step}</h4>
              <p className="text-sm mt-2">{stp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
