import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {
      name: "trade",
      lnk: "/trade",
    },
    {
      name: "buy crypto",
      lnk: "/buycrypto",
    },
    {
      name: "market",
      lnk: "/market",
    },
    {
      name: "about",
      lnk: "/about",
    },
    {
      name: "terms of use",
      lnk: "/termsofuse",
    },
    {
      name: "privacy",
      lnk: "/privacy",
    },
  ];
  return (
    <div className="py-8 px-[5%] lg:px-[10%] text-white">
      <div className="2xl:container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          EXNYTEX
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative cursor-pointer lg:hidden"
        >
          {menuOpen ? <BiX size={45} /> : <FaBars size={30} />}
        </button>

        <div
          className={` ${
            menuOpen ? "left-0 lg:left-auto" : "-left-100 lg:left-0"
          }
            flex flex-col lg:flex-row gap-5 fixed w-2/3 lg:w-full lg:justify-end pt-20 lg:pt-0 ps-10 lg:ps-0 text-black lg:text-white lg:relative top-0 bg-[#80eb15] lg:bg-transparent h-screen lg:h-fit z-50 transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row gap-10 lg:gap-3">
            {links.map((link, index) => (
              <li>
                <Link className="uppercase p-2 font-semibold" to={link.lnk}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" mt-8 lg:mt-0">
            <Link
              to="/signin"
              className="font-bold px-4 rounded py-3 bg-black lg:bg-[#80eb15] text-white"
            >
              Sign Up/In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
