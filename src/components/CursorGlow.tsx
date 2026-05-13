"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px at ${cursorX}px ${cursorY}px, rgba(0, 242, 255, 0.05), transparent 80%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
    />
  );
};
