import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { DiDotnet } from "react-icons/di";
import { FaDotCircle } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import { PiDot } from "react-icons/pi";
import { Link } from "react-router-dom";
import MarketTrends from "../sections/mainPage/MarketTrends";
import Support from "../sections/mainPage/Support";
import Achievements from "../sections/mainPage/Achievements";
import HowItWorks from "../sections/mainPage/HowItWorks";
import Experience from "../sections/mainPage/Experience";

const MainPage = () => {
  const [infoIndex, setInfoIndex] = useState(0);

  const heroData = [
    {
      heading: "crptocurrency",
      desc: "Be calm about your cryptocurrency asset. The best way to receive, send and trade cryptocurrency.",
      img: "",
    },

    {
      heading: "Trading",
      desc: "Crypto trading with a leading exchange. Fast Transaction, minimal commision, many different token, easy and intuitive functionality",
      img: "",
    },

    {
      heading: "Security",
      desc: "Secure Asset Fund for users with a capital of more than $400 million, two factor protection, improved encryption of your transaction data.",
      img: "",
    },

    {
      heading: "Support 24/7",
      desc: "A team of specialists around the clock will help and answer any question.",
      img: "",
    },
    {
      heading: "Platform Volumes",
      desc: "Quartarly trading volume is $137 Billion, the most popular trading pair is BTC/USD ($42 billion)",
      img: "",
    },
    {
      heading: "Explore the Crypto World",
      desc: "150+ countries of the world trust and trade with us.",
      img: "",
    },
  ];

  // useEffect(() => {
  //   setInterval(() => {
  //     setInfoIndex(infoIndex + 1);
  //     if (infoIndex === 5) {
  //       setInfoIndex(0);
  //     }
  //   }, 2000);
  // });

  return (
    <>
      <section
        id="hero"
        className="pt-20 lg:pt-40 pb-32 px-[5%] lg:px-[10%] text-white"
      >
        <div className="2xl:container mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">
              {heroData[infoIndex].heading}
            </h1>
            <p className="opacity-70 mt-8 text-lg">
              {heroData[infoIndex].desc}
            </p>
            <div className="mt-10">
              <Link
                to={""}
                className="bg-[#80eb15] py-3 px-5 text-2xl font-bold rounded"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div>
            <img
              src={heroData[infoIndex].img}
              alt=""
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-32">
          <div className="mx-auto w-fit flex gap-4 items-center">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                onClick={() => setInfoIndex(index)}
                className="cursor-pointer p-1"
              >
                {infoIndex == index ? (
                  <GoDotFill size={40} />
                ) : (
                  <GoDot size={40} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <MarketTrends />
      <Support />
      <Achievements />
      <HowItWorks />
      <Experience />
    </>
  );
};

export default MainPage;
