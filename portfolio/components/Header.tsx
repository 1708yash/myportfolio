"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import {HiMenu} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import { SocialIcon } from "react-social-icons";
function Header() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const [open, setOpen] = React.useState(false)
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-5">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray800">
          <ul className="flex items-center justify-center mx-2 left-0 gap-3">
            <li className="">
              <SocialIcon
                url="https://github.com/1708yash"
                style={{ width: "32px", height: "32px" }}
              />
            </li>
            <li>
              {" "}
              <SocialIcon
                url="https://www.linkedin.com/in/yash-tomar1708/"
                style={{ width: "32px", height: "32px" }}
              />
            </li>
            <li>
              {" "}
              <SocialIcon
                url="https://www.instagram.com/tomar___yash/"
                style={{ width: "32px", height: "32px" }}
              />
            </li>
            <li>
              {" "}
              <SocialIcon
                url="https://www.youtube.com/channel/UCzjSbcwh-tmDIRuyynn8Lvw"
                style={{ width: "32px", height: "32px" }}
              />
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          <HiMenu className={`${open ? "hidden" : "visible"}`} />
          <IoCloseSharp className={`${open ? "visible" : "hidden"}`} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } opacity-0 md:opacity-100`}
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
