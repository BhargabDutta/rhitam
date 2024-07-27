"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-14 text-center text-4xl text-white font-medium tracking-tight text-transparent"
      >
        <span className="font-extralight text-4xl text-center mb-0">Here`&apos;`s</span><br /> <span className="mt-0 text-7xl">Video Editing</span>
      </motion.h1>
    </LampContainer>
  );
}
