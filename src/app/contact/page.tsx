"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8">GET IN TOUCH</h1>
          <p className="text-xl text-gray-400 mb-12">
            Ready to transform your vision into reality? Our team is standing by to help you innovate.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-lg font-medium">francisfabin860@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-green-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">WhatsApp</p>
                <a href="https://wa.me/8590194256" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-green-400 transition-colors">
                  +91 8590194256
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-10 rounded-3xl border border-white/5"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 rounded-xl bg-primary text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
