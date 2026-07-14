"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FiLayers, FiCpu, FiCheckCircle, FiGitBranch, FiTerminal, FiFeather, FiLayout } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer, SiGit, SiGithub, SiFigma } from "react-icons/si";

export default function SkillsSection() {
  const { lang } = useApp();

  const skillsData = {
    en: {
      title: "Technical Expertise",
      sub: "Core Architecture & Ecosystem",
      categories: [
        {
          title: "Git & Version Control",
          icon: FiGitBranch,
          items: [
            { name: "Git Architecture", icon: SiGit, level: "Advanced" },
            { name: "GitHub Workflows", icon: SiGithub, level: "Expert" },
            { name: "Branching & Merging", icon: FiTerminal, level: "Advanced" },
            { name: "Code Reviews & PRs", icon: FiCheckCircle, level: "Expert" }
          ]
        },
        {
          title: "UI/UX & Design Tools",
          icon: FiFeather,
          items: [
            { name: "Figma", icon: SiFigma, level: "Expert" },
            { name: "Adobe XD", icon: FiLayout, level: "Advanced" },
            { name: "Pixel-Perfect Matching", icon: FiLayers, level: "Expert" },
            { name: "Design System Logic", icon: FiCheckCircle, level: "Advanced" }
          ]
        },
        {
          title: "Core Frameworks & Architecture",
          icon: FiCpu,
          items: [
            { name: "React & Next.js 16", icon: SiNextdotjs, level: "Expert" },
            { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
            { name: "Tailwind CSS & Themes", icon: SiTailwindcss, level: "Expert" },
            { name: "Framer Motion", icon: SiFramer, level: "Advanced" }
          ]
        }
      ]
    },
    ar: {
      title: "الخبرات التقنية",
      sub: "بنية ومكونات النظام المتكاملة",
      categories: [
        {
          title: "إدارة النسخ والـ Git",
          icon: FiGitBranch,
          items: [
            { name: "معمارية Git الأساسية", icon: SiGit, level: "متقدم" },
            { name: "بيئة عمل GitHub", icon: SiGithub, level: "خبير" },
            { name: "إدارة الفروع (Branching)", icon: FiTerminal, level: "متقدم" },
            { name: "مراجعة الأكواد والـ PRs", icon: FiCheckCircle, level: "خبير" }
          ]
        },
        {
          title: "تصميم الواجهات UI/UX",
          icon: FiFeather,
          items: [
            { name: "Figma", icon: SiFigma, level: "خبير" },
            { name: "Adobe XD", icon: FiLayout, level: "متقدم" },
            { name: "تطبيق التصاميم بدقة", icon: FiLayers, level: "خبير" },
            { name: "بناء أنظمة التصميم", icon: FiCheckCircle, level: "متقدم" }
          ]
        },
        {
          title: "الأطر الأساسية والمعمارية",
          icon: FiCpu,
          items: [
            { name: "React & Next.js 16", icon: SiNextdotjs, level: "خبير" },
            { name: "TypeScript", icon: SiTypescript, level: "متقدم" },
            { name: "Tailwind CSS والأنماط", icon: SiTailwindcss, level: "خبير" },
            { name: "Framer Motion للتحريك", icon: SiFramer, level: "متقدم" }
          ]
        }
      ]
    }
  };

  const t = skillsData[lang];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 relative z-10">
      <div className="mb-20 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-purple-500 block mb-3">{t.sub}</span>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">{t.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.categories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent blur-xl group-hover:from-purple-500/20 transition-all" />
            
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <category.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-wide">{category.title}</h4>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-md border border-purple-500/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}