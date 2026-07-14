"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiActivity, FiCpu } from "react-icons/fi";

export default function ExperienceSection() {
  const { lang } = useApp();
  const isEn = lang === "en";

  const t = {
    en: {
      sub: "My Professional Journey",
      title: "Experience & Internships",
      techUsed: "Key Technologies:",
      outcome: "Outcome:"
    },
    ar: {
      sub: "مسيرتي المهنية",
      title: "الخبرات والتدريبات العمليّة",
      techUsed: "أبرز التقنيات والأدوات:",
      outcome: "النتيجة والأثر:"
    }
  }[lang];

  const experiences = [
    {
      id: 1,
      role: isEn ? "Frontend Developer & UI Designer" : "مطورة واجهات ومصممة UI/UX",
      company: isEn ? "Freelance / Remote" : "عمل حر / عن بعد",
      period: isEn ? "2024 - Present" : "2024 - الحاضر",
      location: isEn ? "Egypt (Remote)" : "مصر (عن بعد)",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Git & GitHub", "Figma"],
      outcome: isEn 
        ? "Delivered pixel-perfect production-ready web apps for clients, ensuring clean code architectures." 
        : "تسليم تطبيقات ويب متكاملة واحترافية للعملاء مع ضمان دقة الأكواد والتصميم بنسبة 100%.",
      achievements: isEn 
        ? [
            "Architected high-performance web applications using Next.js 16, React, and Tailwind CSS.",
            "Designed and implemented high-fidelity, interactive dashboards with complex horizontal scrolling and glassmorphism elements.",
            "Utilized Git and GitHub for precise version control, branching strategies, and smooth workflow environments."
          ]
        : [
            "بناء وتطوير تطبيقات ويب عالية الأداء باستخدام Next.js 16 و React و Tailwind CSS.",
            "تصميم واجهات ولوحات تحكم تفاعلية متقدمة تعتمد على الأنماط الحديثة مثل التصاميم الزجاجية (Glassmorphism).",
            "إدارة برمجية متكاملة لنسخ الأكواد والمستودعات باستخدام Git و GitHub وإستراتيجيات الفروع المنظمة."
          ]
    },
    {
      id: 2,
      role: isEn ? "UI/UX Designer - Hackathon" : "مصممة واجهات مستخدم - هكاثون",
      company: isEn ? "Orange Digital Center (ODC)" : "مركز أورنج الرقمي (ODC)",
      period: isEn ? "2025" : "2025",
      location: isEn ? "Egypt" : "مصر",
      tags: ["Figma", "UI/UX Research", "Interactive Prototyping", "Design Systems"],
      outcome: isEn 
        ? "Successfully built and presented a fully-functional interactive prototype during the hackathon." 
        : "بناء وتقديم نموذج تفاعلي متكامل عالي الدقة وعرضه بنجاح أمام لجنة التحكيم بالهكاثون.",
      achievements: isEn 
        ? [
            "Collaborated in an intensive hackathon environment to design user-centric digital products under tight deadlines.",
            "Created pixel-perfect mobile and web user interfaces using Figma, focusing on layout heuristics and interactive prototyping.",
            "Conducted user research and translated complex workflows into clean, intuitive wireframes and user journeys."
          ]
        : [
            "المشاركة والعمل التعاوني في هكاثون مكثف لتصميم منتجات رقمية تركز على احتياجات المستخدم تحت ضغط زمني.",
            "بناء واجهات مستخدم متكاملة ودقيقة للهواتف والويب باستخدام Figma مع التركيز على النماذج التفاعلية (Prototypes).",
            "إجراء أبحاث المستخدم وتحويل مسارات العمل المعقدة إلى مخططات هيكلية (Wireframes) مبسطة وواضحة."
          ]
    },
    {
      id: 3,
      role: isEn ? "Frontend Web Development Intern" : "متدربة تطوير واجهات الويب (Frontend)",
      company: isEn ? "SEF - Summer Training" : "مؤسسة SEF - التدريب الصيفي",
      period: isEn ? "Summer 2025" : "صيف 2025",
      location: isEn ? "Egypt (Remote)" : "مصر (عن بعد)",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
      outcome: isEn 
        ? "Developed and optimized 10+ responsive web interfaces during the summer cohort." 
        : "تطوير وتحسين أكثر من 10 واجهات ويب متكاملة ومتجاوبة مع مختلف مقاسات الشاشات خلال فترة التدريب.",
      achievements: isEn 
        ? [
            "Participated in rigorous hands-on training focusing on modern web development workflows and responsive layouts.",
            "Developed reusable, modular components using clean HTML, CSS, and modern JavaScript architectures.",
            "Learned and applied state management and component communication principles to ensure highly performant user interfaces."
          ]
        : [
            "المشاركة في تدريب عملي مكثف يركز على أحدث بيئات تطوير الويب والواجهات المتجاوبة مع كافة الأجهزة.",
            "تطوير مكونات برمجية قابلة لإعادة الاستخدام باستخدام HTML و CSS وبنيات جافا سكريبت الحديثة.",
            "دراسة وتطبيق مفاهيم إدارة حالة التطبيق (State Management) لضمان سرعة واستجابة الواجهات البرمجية."
          ]
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200/10 dark:border-white/5 relative z-10">
      <div className="mb-20 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-purple-600 dark:text-purple-400 block mb-3">
          {t.sub}
        </span>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
          {t.title}
        </h3>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-white/5 ml-4 md:ml-32 space-y-12 rtl:border-l-0 rtl:border-r-2 rtl:mr-4 rtl:md:mr-32 rtl:ml-0 rtl:md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: isEn ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 rtl:pl-0 rtl:pr-8"
          >
            <span className="absolute -left-[11px] rtl:-right-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-[#060211] border-2 border-purple-600 dark:border-purple-400">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
            </span>

            <div className="p-8 rounded-3xl border border-gray-200/50 dark:border-white/5 bg-gray-50/40 dark:bg-white/[0.01] hover:bg-gray-100 dark:hover:bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-purple-500/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FiBriefcase className="text-purple-600 dark:text-purple-400 w-5 h-5" />
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200/50 dark:bg-white/5">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200/50 dark:bg-white/5">
                    <FiMapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              
              <ul className="space-y-3.5 mb-6">
                {exp.achievements.map((ach, achIdx) => (
                  <li key={achIdx} className="flex items-start gap-3">
                    <FiActivity className="text-purple-500/60 dark:text-purple-400/60 w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {ach}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200/40 dark:border-white/[0.03] pt-6 space-y-4">
                 
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mr-2 rtl:mr-0 rtl:ml-2">
                    {t.techUsed}
                  </span>
                  {exp.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-purple-600 dark:text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                
                <div className="flex items-center gap-2 text-xs">
                  <FiCpu className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    <strong className="text-gray-900 dark:text-white font-bold mr-1 rtl:mr-0 rtl:ml-1">
                      {t.outcome}
                    </strong>{" "}
                    {exp.outcome}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}