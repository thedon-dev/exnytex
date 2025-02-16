import React from "react";

const Experience = () => {
  const exp = [
    {
      heading: "11+",
      sub: "Over 11 millions registered users",
    },
    {
      heading: "170+",
      sub: "Over 170 countried covered",
    },
    {
      heading: "25+",
      sub: "Over $25 billion of trading volume daily",
    },
    {
      heading: "12+",
      sub: "Over 12 assets for staking",
    },
  ];
  return (
    <div className="px-[5%] lg:px-[10%] py-20 text-white">
      <div className="2xl:container mx-auto grid grid-col-1 lg:grid-cols-2">
        <div className="col-span-1">
          <img src="" alt="" />
          <h1 className="uppercase font-bold text-5xl text-[#80eb15] text-center">
            experience
          </h1>
        </div>
        <div className="col-span-1 grid grid-cols-2 mt-10 lg:mt-0">
          {exp.map((ex, index) => (
            <div className="text-center p-10 lg:p-16 bg-gray-600 border border-gray-700">
              <h2 className="text-4xl lg:text-5xl text-[#80eb15]">
                {ex.heading}
              </h2>
              <p className="text-sm mt-2">{ex.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
