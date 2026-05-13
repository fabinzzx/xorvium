import React from "react";
import Link from "next/link";
import { MessageCircle, ExternalLink } from "lucide-react";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="glass border-t border-glass-border pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-bold text-neon-blue mb-4 block">
            XORVIUM
          </Link>
          <p className="text-gray-400 max-w-sm">
            Empowering the next generation of digital excellence through innovative technology and creative design.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors"><XIcon size={20}/></Link>
            <Link href="#" className="hover:text-primary transition-colors"><GithubIcon size={20}/></Link>
            <Link href="#" className="hover:text-primary transition-colors"><ExternalLink size={20}/></Link>
            <Link href="#" className="hover:text-primary transition-colors"><MessageCircle size={20}/></Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2026 Xorvium Innovations. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
