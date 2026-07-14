"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const { lang } = useApp();

  const t = {
    en: {
      rights: "All Rights Reserved.",
      status: "SYS STATUS // OPERATIONAL",
      backToTop: "BACK TO TOP",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    ar: {
      rights: "جميع الحقوق محفوظة.",
      status: "حالة النظام // يعمل بكفاءة",
      backToTop: "العودة للأعلى",
      links: [
        { name: "نبذة", href: "#about" },
        { name: "المهارات", href: "#skills" },
        { name: "المشاريع", href: "#projects" },
        { name: "تواصل", href: "#contact" }
      ]
    }
  }[lang === "en" ? "en" : "ar"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-gradient-to-t from-black/80 to-[#060211]/40 backdrop-blur-md relative z-10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <motion.div 
            className="text-xs font-black tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-purple-400"
            whileHover={{ scale: 1.05 }}
          >
            NURHAN<span className="text-white">.DEV</span>
          </motion.div>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            © 2026 // {t.rights}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {t.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-medium text-gray-400 hover:text-purple-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a 
              href="https://github.com/NorhanAdel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/norhan-adel-8ba0a3351" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono font-bold tracking-wider text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all"
          >
            <FaArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            {t.backToTop}
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-white/[0.02] flex justify-center md:justify-start">
        <span className="text-[9px] font-mono tracking-widest text-emerald-500/60 uppercase flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {t.status}
        </span>
      </div>
    </footer>
  );
}