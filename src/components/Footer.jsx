import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Company",
      links: [
        { name: "About Us", lnk: "/about" },
        { name: "Privacy Policy ", lnk: "/privacy" },
        { name: "Terms Of Use", lnk: "/termsofuse" },
        { name: "Security", lnk: "/security" },
        { name: "Risk Warning", lnk: "/riskawrning" },
      ],
    },
    {
      heading: "Service",
      links: [
        { name: "FAQ", lnk: "/faq" },
        { name: "Fees", lnk: "/fees" },
        { name: "Referrals", lnk: "/referrals" },
      ],
    },
    {
      heading: "Trade",
      links: [
        { name: "BTC/USDT", lnk: "/about" },
        { name: "ETH/USDT", lnk: "/about" },
        { name: "LTC/USDT", lnk: "/about" },
        { name: "BCH/USDT", lnk: "/about" },
      ],
    },
  ];
  return (
    <div className="px-[5%] lg:px-[10%] py-20 text-white border-t border-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:container mx-auto gap-32">
        <div>
          <h1 className="uppercase font-bold text-4xl opacity-80">Exnytex</h1>
          <p className="text-sm mt-5">
            The Transactions offered by this Website can be executed only by
            fully competent adults. Transactions with financial instruments
            offered on the Website involve substantial risk and trading may be
            very risky.
          </p>

          <p className="text-sm font-bold mt-5">
            © 2025. All rights reserved by Exnytex
          </p>
        </div>
        <div className="grid rid-cols-1 lg:grid-cols-3">
          {footerLinks.map((lnks, index) => (
            <div className={`${index > 0 ? "mt-10 lg:mt-0" : "mt-0"}`}>
              {" "}
              <h2 className="text-lg font-bold">{lnks.heading}</h2>
              <div className="flex flex-col gap-2 mt-5">
                <ul className="flex flex-col text-sm gap-2 opacity-70">
                  {lnks.links.map((l, index) => (
                    <Link to={l.lnk} className="flex gap-1 items-center">
                      <BsDot />
                      {l.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
