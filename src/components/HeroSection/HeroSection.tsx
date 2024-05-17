"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "../ui/moving-border";
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
          className="grid grid-cols-1 xl:grid-cols-2  max-h-100 "
        >
          <div className="">
            <img
              className="w-full h-100 lg:h-[100vh]  "
              src="./Subscription_Stop_Motion.webp"
              alt="Subscription Stop Motion"
            />
            {/* Fixed image source */}
          </div>
          <div className="text-center p-10 md:p-24 xl:pt-48">
            <h1 className="text-base md:text-2xl font-bold">
              Experience the magic of growing plants
            </h1>
            <p className="text-sm font-medium py-3 md:py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button
              borderRadius="3.75rem"
              className="bg-white dark:bg-white text-black dark:text-black font-semibold border-gray-800 dark:border-slate-800"
            >
              Explore
            </Button>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
};

export default HeroSection;
