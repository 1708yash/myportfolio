"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Yash Tomar ",
      "Guy-who-loves-to-design.tsx",
      "Creating something everyday",
      "",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
        <BackgroundCircles/>
      <h1>
        <span>
          <p>{text}</p>
        </span>
        <Cursor cursorColor="black" />
      </h1>
    </div>
  );
}