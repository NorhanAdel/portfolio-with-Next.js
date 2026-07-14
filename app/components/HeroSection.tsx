"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import { FiDownload, FiLayers, FiDatabase, FiCpu, FiGitBranch } from "react-icons/fi";

export default function HeroSection() {
  const { lang } = useApp();
  const t = portfolioData[lang].hero;

  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = lang === "en" 
    ? ["FRONTEND LEADER", "NEXT.JS EXPERT", "UI/UX ARCHITECT"] 
    : ["قائد واجهات مستخدم", "خبير NEXT.JS", "مهندس واجهات UI/UX"];
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setTypedText(fullWord.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(fullWord.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && typedText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
      
      <div className="absolute inset-0 -z-10 bg-[#060211] dark:bg-[#04010a]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -50, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/10 blur-[100px]"
          animate={{ x: [0, -30, 50, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <motion.div 
          className="lg:col-span-7 space-y-8 text-center lg:text-left rtl:lg:text-right"
          initial={{ opacity: 0, x: lang === "en" ? -60 : 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-purple-300 font-bold">
              {t.sub}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white">
              {t.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-400 min-h-[1.2em] inline-block">
                {typedText}
                <span className="text-purple-500">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-400/90 max-w-xl tracking-wide">
              {t.quote}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a 
              href="/cv.pdf" 
              download="Nourhan_Adel_CV.pdf"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0_0_30px_rgba(139,92,246,0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload className="w-4 h-4" />
              {t.downloadCv}
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {[
              { icon: FiLayers, label: "Frontend Architecture" },
              { icon: FiDatabase, label: "State Management" },
              { icon: FiCpu, label: "API Integration" },
              { icon: FiGitBranch, label: "Scalable Workflows" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md group cursor-pointer"
                whileHover={{ y: -5, backgroundColor: "rgba(139, 92, 246, 0.05)", borderColor: "rgba(139, 92, 246, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors" />
                <span className="text-[11px] tracking-wider uppercase font-medium text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 flex justify-center relative min-h-[400px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute w-80 h-80 rounded-full border border-purple-500/10 animate-[spin_60s_linear_infinite] flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border border-dashed border-pink-500/10" />
          </div>
          
          <motion.div 
            className="w-full max-w-[340px] p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 space-y-6 group"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateY: 10, rotateX: -5, borderColor: "rgba(219, 39, 119, 0.3)" }}
          >
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div className="text-[10px] font-mono tracking-widest text-purple-400">SYS.STATUS // ACTIVE</div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/40" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">{t.name}</div>
              <div className="text-2xl font-black text-white tracking-wide">{t.role}</div>
              <div className="text-xs text-purple-400 font-mono font-medium">{t.tagline}</div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-gray-400 space-y-2 leading-relaxed">
              <p><span className="text-pink-400">const</span> leaderOfPioneering = <span className="text-indigo-400">true</span>;</p>
              <p><span className="text-pink-400">const</span> techStack = [<span className="text-emerald-400">"React", "Next.js", "TS"</span>];</p>
              <p><span className="text-pink-400">if</span> (experience) &#123;</p>
              <p className="pl-4 text-purple-300">deliverHighQualityCode();</p>
              <p>&#125;</p>
            </div>

            <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold border-t border-white/5 pt-4">
              <span>{t.stats}</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}