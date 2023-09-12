"use client"
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center "
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="flex flex-row items-center ">
          {/* social icons */}
          <SocialIcon
            url="https://www.linkedin.com/in/yash-tomar1708/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/1708yash"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/tomar___yash/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.youtube.com/@letusunite1239"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* contact me */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Feel Free to contact
        </p>
      </motion.div>
    </header>
  );
}
