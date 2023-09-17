"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row maz-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        about
      </h3>
      <motion.img
        className="mt-24 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[600px]"
        src="/images/yash.jpg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="relative flex flex-col space-y-10 px-0 md:px-10 ">
        <h4 className="text-2xl font-semibold">Hello there,</h4>
        <p className="text-xl">
          I am a student pursuing my Computer Science and Engineering at
          Chandigarh University. I am a Front-end developer and Graphic
          Designer. I love to learn new things and add on more skills. Currenty
          I am learning Blender for making 3D models and animations. I am also
          learning React Native for making mobile apps. I am also learning
          Next.js for making server side rendered websites. I got a chance to
          meet many people and learn from them. I am a good team player and I
          love to work in a team.
        </p>
        <br />
        <p className="text-xl">
          I love to create thing now and then, whenever I have some idea I bring
          it to reality. I am good at team events and work so it makes easy for
          me to understand and adject myself very quick in the environment. I
          have been to many places since my childhood so I have a good
          experience of travelling and exploring new places. I love peaceful
          places and natural habitats. I am a good listener and I love to listen
          to people and their broad ideas specifically to get better grasp of my
          surrounding.
        </p>
      </div>
    </motion.div>
  );
}
