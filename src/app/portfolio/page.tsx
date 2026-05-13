"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Okinawan Shitoryu Karate",
    category: "Martial Arts & Education",
    desc: "A comprehensive platform for the Okinawan Shitoryu Karate Federation, featuring training modules and events.",
    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2940&auto=format&fit=crop",
    link: "http://www.okinavanshitoryukarate.in",
  },
  {
    title: "Rajaguru Wellness",
    category: "Health & Wellness",
    desc: "A premium wellness and holistic healing center website with integrated booking and consultancy features.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop",
    link: "http://www.rajaguruwellness.in",
  },
  {
    title: "Studio JAAQ",
    category: "Architecture & Design",
    desc: "A sophisticated portfolio for an architectural studio showcasing high-end residential and commercial projects.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
    link: "http://www.studiojaaq.com",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6">PORTFOLIO</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our latest digital artifacts and transformative projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto pb-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative glass rounded-3xl overflow-hidden border border-white/5"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.desc}</p>
              <div className="flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
