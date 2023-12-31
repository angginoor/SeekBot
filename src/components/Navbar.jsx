import { useState } from "react";

import { close, seekBot, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex mx-[24px] py-6 justify-between z-[2] items-center navbar fixed md:max-w-[1280px] md:min-w-[800px] w-full top-6 bg-primary px-8 rounded-full">
      <img src={seekBot} alt="seekBot" className="w-[96px] h-[18px]" />

      <ul className="list-none md:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-manrope font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="hidden md:block cursor-pointer">
        <a href="#" className="font-manrope font-normal text-[16px] text-white">Contact Us</a>
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center sm:min-w-[400px] min-w-[180px]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-green-gradient fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-manrope font-normal cursor-pointer text-[16px] mb-4 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <div className="md:hidden cursor-pointer">
                <a href="#" className="font-manrope font-medium text-[16px] text-white">Contact Us</a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;