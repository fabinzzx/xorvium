"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, Award, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-12">
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 glass relative z-10">
              <img 
                src="/profile.jpg" 
                alt="Fabin Paul Francis"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="absolute inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              FABIN PAUL <br /> FRANCIS
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Founder & Lead Innovator at Xorvium. With a passion for cutting-edge technology and design, 
              I lead a team dedicated to transforming digital landscapes.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary">📧</span>
                <a href="mailto:francisfabin860@gmail.com" className="hover:text-primary transition-colors">francisfabin860@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="w-8 h-8 rounded-lg glass flex items-center justify-center text-secondary">📱</span>
                <a href="tel:859019425" className="hover:text-secondary transition-colors">859019425</a>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/contact" className="px-8 py-3 rounded-full bg-primary text-black font-bold hover:scale-105 transition-transform">
                Let's Collaborate
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          OUR STORY
        </motion.h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Xorvium Innovations was founded on the principle that technology should be a catalyst for human potential. 
          We are a team of visionaries, engineers, and designers dedicated to building the future.
        </p>
      </section>

      <section className="text-center pb-20">
        <div className="inline-block glass p-1 px-8 py-4 rounded-full border border-primary/20">
          <p className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
            Driven by Innovation <Rocket size={16} className="text-primary" />
          </p>
        </div>
      </section>
    </div>
  );
}
