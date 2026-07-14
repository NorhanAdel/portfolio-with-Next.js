"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { portfolioData } from "..//data/portfolio";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";

export default function Navbar() {
  const { lang, theme, toggleLanguage, toggleTheme } = useApp();
  const t = portfolioData[lang].nav;
  
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: t.about, href: "#about" },
    { id: "projects", label: t.projects, href: "#projects" },
    { id: "contact", label: t.contact, href: "#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ paddingTop: scrolled ? "1rem" : "1.5rem" }}
    >
      <motion.div
        className={`w-full max-w-5xl flex justify-between items-center px-6 rounded-2xl transition-all duration-300 border ${
          scrolled
            ? "py-3 bg-black/40 dark:bg-[#090514]/60 border-purple-500/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,92,246,0.1)]"
            : "py-5 bg-transparent border-transparent"
        }`}
        layout
      >
       
        <motion.div 
          className="text-xs font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-purple-400 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NURHAN<span className="text-white">.DEV</span>
        </motion.div>
        
         
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1 relative py-1 px-1.5 rounded-xl bg-gray-500/5 dark:bg-white/[0.02] border border-gray-500/10 dark:border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors z-10"
                style={{ color: hoveredNav === link.id ? "#fff" : "rgba(156, 163, 175, 0.8)" }}
                onMouseEnter={() => setHoveredNav(link.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
               
                {hoveredNav === link.id && (
                  <motion.span
                    layoutId="navHoverBg"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 -z-10 shadow-md shadow-purple-600/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

         
          <div className="flex items-center gap-2 border-l border-gray-500/20 dark:border-white/10 pl-4 rtl:pr-4 rtl:border-r rtl:border-l-0">
            <motion.button 
              onClick={toggleLanguage} 
              className="p-2.5 rounded-xl bg-gray-500/5 dark:bg-white/[0.02] border border-gray-500/10 dark:border-white/5 text-gray-400 hover:text-purple-400 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGlobe className="w-4 h-4" />
            </motion.button>
            
            {/* <motion.button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-xl bg-gray-500/5 dark:bg-white/[0.02] border border-gray-500/10 dark:border-white/5 text-gray-400 hover:text-purple-400 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4" />}
            </motion.button> */}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}