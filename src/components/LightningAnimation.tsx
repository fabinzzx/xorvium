"use client";

import React from "react";
import { motion } from "framer-motion";

export const LightningAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* Lightning Streak 1 */}
      <motion.div
        initial={{ left: "0%", top: "20%", opacity: 0, width: "0px" }}
        animate={{
          left: ["0%", "40%", "70%", "100%"],
          top: ["20%", "40%", "10%", "50%"],
          width: ["0px", "200px", "100px", "0px"],
          opacity: [0, 1, 0.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] rotate-[-15deg]"
      >
        <div className="absolute inset-0 bg-white blur-md opacity-50" />
      </motion.div>

      {/* Lightning Streak 2 (Faster & Different Path) */}
      <motion.div
        initial={{ right: "0%", bottom: "30%", opacity: 0, width: "0px" }}
        animate={{
          right: ["0%", "50%", "100%"],
          bottom: ["30%", "60%", "20%"],
          width: ["0px", "300px", "0px"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "linear",
        }}
        className="absolute h-[1px] bg-gradient-to-l from-transparent via-secondary to-transparent blur-[2px] rotate-[20deg]"
      >
        <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
      </motion.div>
    </div>
  );
};
