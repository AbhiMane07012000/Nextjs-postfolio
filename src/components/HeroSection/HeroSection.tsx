"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
const HeroSection = () => {
  return (
    <>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col lg:flex-row gap-4 px-4"
      >
        <div className="">
          Background lights are cool you know.
        </div>
        <div className="">
          Background lights are cool you know.
        </div>
        </motion.div>
        </AuroraBackground>
    </>
   
  );
};

export default HeroSection;
