import React from "react";

const Achievements = () => {
  const achievementData = [
    {
      heading: "24/7 customer service",
      desc: "Online chat with support staff is available 24/7",
    },
    {
      heading: "International coverage",
      desc: "Availability in 160+ countries",
    },
    {
      heading: "Reliable security infrastructure",
      desc: "Fast trading engine and no server downtime",
    },
    {
      heading: "Trading",
      desc: "The most advanced automatic trading tools",
    },
    {
      heading: "Earnings system",
      desc: "Invest and make money on coin staking",
    },
    {
      heading: "The big community",
      desc: "Gathered a large community of traders",
    },
  ];
  return (
    <div className="px-[5%] lg:px-[10%] py-20 text-white">
      <div className="2xl:container mx-auto">
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-[#80eb15]">Achievements</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-8">
          {achievementData.map((data, index) => (
            <div className="p-16 grid text-center lg:text-start place-content-center rounded-lg border border-gray-800 hover:bg-[#80eb15] transition-all duration-700">
              <h4 className="text-2xl font-bold ">{data.heading}</h4>
              <p className="mt-3">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
