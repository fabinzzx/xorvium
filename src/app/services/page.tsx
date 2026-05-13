"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Layout, Zap, Shield, Cpu, Search, MousePointer2 } from "lucide-react";

const services = [
  { icon: <Globe />, title: "Website Development", desc: "Enterprise-grade web applications built with Next.js, React, and high-performance technologies.", color: "primary" },
  { icon: <Smartphone />, title: "Mobile App Development", desc: "Intuitive and powerful mobile experiences for iOS and Android using modern frameworks.", color: "secondary" },
  { icon: <Layout />, title: "UI/UX Design", desc: "User-centric designs that blend aesthetic beauty with seamless functionality.", color: "accent" },
  { icon: <Search />, title: "SEO Optimization", desc: "Data-driven strategies to increase your visibility and dominate search rankings.", color: "primary" },
  { icon: <Zap />, title: "AI Solutions", desc: "Custom AI integration, automation, and intelligent data analysis for business growth.", color: "secondary" },
  { icon: <MousePointer2 />, title: "Digital Branding", desc: "Comprehensive brand identity development for the digital-first era.", color: "accent" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6">SERVICES</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to solve complex problems and deliver premium digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <div className="mb-6 text-primary w-12 h-12 flex items-center justify-center rounded-2xl glass border border-white/10">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
