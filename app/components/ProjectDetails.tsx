"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowLeft, FiCode, FiLayers, FiCalendar, FiCheckCircle, FiCpu, FiShield } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ProjectDetailsProps {
  project: {
    id: string;
    title: string;
    desc: string;
    fullDesc: string;
    image: string;
    tech: string[];
    github: string;
    linkedin: string;
    live: string;
  };
  lang: "en" | "ar";
  t: any;
  onBack: () => void;
}

export default function ProjectDetails({ project, lang, t, onBack }: ProjectDetailsProps) {
  const isEn = lang === "en";

  const caseStudyInfo = {
    en: {
      highlightsTitle: "Core Deliverables & Highlights",
      highlights: [
        "Architected highly performant layouts optimized for Next.js 16.",
        "Engineered responsive Dark/Light themes with cohesive color accents.",
        "Delivered smooth dynamic interfaces & interactive dashboard views."
      ]
    },
    ar: {
      highlightsTitle: "أبرز الإنجازات والحلول البرمجية",
      highlights: [
        "بناء معمارية برمجية عالية الأداء مهيأة بالكامل لبيئة Next.js 16.",
        "تطوير أنظمة تحول ديناميكية للوضع المظلم والمضيء بتناسق بصري دقيق.",
        "تقديم واجهات تفاعلية مرنة وحركات سلسة لتجربة مستخدم مثالية."
      ]
    }
  }[lang];

  return (
    <motion.div
      key="details"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full rounded-3xl border border-white/10 bg-[#0b071e]/95 backdrop-blur-2xl overflow-hidden shadow-2xl relative"
    >
      <div className="h-96 w-full relative">
        <motion.img
          layoutId={`img-${project.id}`}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b071e] via-transparent to-black/50" />
        
        <button
          onClick={onBack}
          className="absolute top-6 left-6 rtl:left-auto rtl:right-6 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 hover:bg-purple-600 text-white text-xs font-semibold transition-all border border-white/10 backdrop-blur-md"
        >
          <FiArrowLeft className="w-4 h-4 rtl:rotate-180" />
          {isEn ? "Back to Projects" : "العودة للمشاريع"}
        </button>
      </div>

      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-20 relative z-10">
        
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-purple-400 tracking-widest block">
              {project.id} // CASE STUDY
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <div className="space-y-6 text-gray-300 text-base leading-relaxed bg-white/[0.01] p-6 md:p-8 rounded-2xl border border-white/5">
            <p className="font-bold text-lg text-white border-b border-white/5 pb-4">
              {project.desc}
            </p>
            <p>{project.fullDesc}</p>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <FiShield className="text-purple-400" />
              {caseStudyInfo.highlightsTitle}
            </h4>
            <div className="space-y-3">
              {caseStudyInfo.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex items-start gap-3"
                >
                  <FiCpu className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <FiCode className="text-purple-400" />
              {isEn ? "Skills Applied & Capabilities" : "المهارات المطبقة والقدرات"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.tech.map((techItem, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                >
                  <FiCheckCircle className="text-purple-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-200">
                    {techItem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
            <h5 className="text-xs font-mono tracking-widest text-gray-400 uppercase border-b border-white/5 pb-3">
              Project Metadata
            </h5>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FiLayers className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Role</p>
                  <p className="text-white font-bold text-xs">Frontend Lead / Designer</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FiCalendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Timeline</p>
                  <p className="text-white font-bold text-xs">Production Ready (2026)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/20"
            >
              <FiExternalLink className="w-4 h-4" /> {t.links.live}
            </a>
            
            <div className="grid grid-cols-2 gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all"
              >
                <FaGithub className="w-4 h-4" /> {t.links.github}
              </a>
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all"
              >
                <FaLinkedin className="w-4 h-4" /> {t.links.linkedin}
              </a>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}