"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import {HiMenu} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
function Header() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const [open, setOpen] = React.useState(false)
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <Image src="/assets/ylogo.png" width={50} height={50} alt="logo" />
          </span>
          Designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <HiMenu className={`${open ? "hidden" : "visible"}`} />
          <IoCloseSharp className={`${open ? "visible" : "hidden"}`} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } opacity-0 md:opacity-0100`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 text-xl md:my-0 my-7" key={link.name}>
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button>Resume</Button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
