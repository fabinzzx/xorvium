"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center px-6 md:px-12 justify-between"
    >
      <Link href="/" className="text-2xl font-bold tracking-tighter text-neon-blue">
        XORVIUM
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact"
          className="px-5 py-2 rounded-full bg-primary text-black font-semibold text-sm hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
};
