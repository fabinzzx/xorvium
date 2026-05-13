"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, Zap, Shield, Layout, Globe, Cpu, Smartphone } from "lucide-react";

import { LightningAnimation } from "@/components/LightningAnimation";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <LightningAnimation />
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-mesh opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 relative"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
              The Future of Innovation is Here
            </span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8] py-2">
            <motion.span 
              whileHover={{ 
                textShadow: "0 0 20px rgba(0,242,255,0.8), 0 0 40px rgba(112,0,255,0.5)",
                scale: 1.02
              }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary inline-block drop-shadow-[0_0_20px_rgba(0,242,255,0.2)] cursor-default transition-all duration-500"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block text-primary mr-[-0.1em]"
              >
                X
              </motion.span>
              ORVIUM
            </motion.span>
            <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              INNOVATIONS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Architecting next-generation digital ecosystems through <span className="text-primary">advanced AI</span>, 
            <span className="text-white"> premium design</span>, and <span className="text-secondary">limitless scalability</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="group relative px-8 py-4 rounded-full bg-primary text-black font-bold flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Start Transformed</span> <Rocket size={20} className="relative z-10" />
            </Link>
            <Link 
              href="/portfolio"
              className="px-8 py-4 rounded-full border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Artifacts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Dynamic Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-primary/10 blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-secondary/5 blur-[120px]"
          />
        </div>
      </section>

      {/* Services Snippet */}
      <section className="px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">Cutting-edge solutions for modern challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Globe className="text-primary" />, title: "Web Development", desc: "Crafting immersive digital experiences with Next.js and high-performance stacks." },
            { icon: <Smartphone className="text-secondary" />, title: "Mobile Apps", desc: "Building native-feel cross-platform apps that users love." },
            { icon: <Layout className="text-accent" />, title: "UI/UX Design", desc: "Visual storytelling through minimal and intuitive interface design." },
            { icon: <Zap className="text-primary" />, title: "AI Solutions", desc: "Integrating advanced machine learning to automate and optimize." },
            { icon: <Shield className="text-secondary" />, title: "Security", desc: "Cyber-inspired security protocols for the modern web." },
            { icon: <Cpu className="text-accent" />, title: "Digital Branding", desc: "Defining your identity in a crowded digital landscape." },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
