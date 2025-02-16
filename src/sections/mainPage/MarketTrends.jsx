import React from "react";
import { BiBitcoin } from "react-icons/bi";
import { LiaEthereum } from "react-icons/lia";

const MarketTrends = () => {
  const coins = [
    {
      name: "Bitcoin",
      icon: <BiBitcoin size={30} color="yellow" />,
      price: 97500,
    },
    {
      name: "Ethereum",
      icon: <LiaEthereum size={30} color="white" />,
      price: 97500,
    },
  ];
  return (
    <div className="px-[5%] lg:px-[10%] text-white py-20">
      <div className="2xl:container mx-auto">
        <h1 className="uppercase text-4xl lg:text-5xl font-bold text-center">
          Market <span className="text-[#7fff00]">Trends</span>
        </h1>
        <p className="font-semibold text-base lg:text-lg opacity-70 mt-3 text-center">
          Monitor your favorite trading pairs in real time and invest to build
          your own portfolio on the fastest trading engine.
        </p>

        <div className="no-scroll rounded-lg overflow-hidden mt-10 bg-[#101518] overflow-x-scroll">
          <table className="w-full bg-[#101518] text-nowrap">
            <thead className="">
              <tr className="text-[#80eb15] font-bold text-lg">
                <th className="py-3 px-3 text-start">Token</th>
                <th className="py-3 px-3 text-start">Price</th>
                <th className="py-3 px-3 text-start">24h Change</th>
                <th className="py-3 px-3 text-start">Volume 24H</th>
                <th className="py-3 px-3 text-center">Chart</th>
              </tr>
            </thead>
            <tbody className="bg-[#22282D]">
              {coins.map((coin, index) => (
                <tr className="text-nowrap hover:bg-gray-700">
                  <td className="text-lg text-nowrap font-semibold ps-2 py-2 items-center">
                    {coin.icon}
                  </td>

                  <td className="py-3 text-lg font-semibold">${coin.price}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="flex justify-center p-3">
                    <button className="py-2 px-3 rounded shadow-lg bg-gray-600">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="py-5 flex justify-center">
            <button className="bg-[#80eb15] p-2 lg:p-4 rounded-lg font-bold text-white">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;
