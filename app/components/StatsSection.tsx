"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FiCode, FiAward, FiClock, FiSmartphone } from "react-icons/fi";

export default function StatsSection() {
  const { lang } = useApp();
  const isEn = lang === "en";

  const statsData = {
    en: [
      {
        id: 1,
        value: "10+",
        label: "Pixel-Perfect Projects",
        sub: "Completed with clean code",
        icon: FiCode,
        color: "from-purple-500 to-indigo-500"
      },
      {
        id: 2,
        value: "3+",
        label: "Hackathons & Internships",
        sub: "Hands-on tech training",
        icon: FiAward,
        color: "from-pink-500 to-rose-500"
      },
      {
        id: 3,
        value: "1,200+",
        label: "Hours of Dev & Design",
        sub: "Writing clean, modular components",
        icon: FiClock,
        color: "from-amber-500 to-orange-500"
      },
      {
        id: 4,
        value: "100%",
        label: "Responsive Accuracy",
        sub: "Fluid mobile & web UIs",
        icon: FiSmartphone,
        color: "from-emerald-500 to-teal-500"
      }
    ],
    ar: [
      {
        id: 1,
        value: "+10",
        label: "مشاريع دقيقة التفاصيل",
        sub: "مبنية بأكواد نظيفة ومنظمة",
        icon: FiCode,
        color: "from-purple-500 to-indigo-500"
      },
      {
        id: 2,
        value: "+3",
        label: "تداريب وهكاثونات مكثفة",
        sub: "خبرة عملية في بيئات عمل حقيقية",
        icon: FiAward,
        color: "from-pink-500 to-rose-500"
      },
      {
        id: 3,
        value: "+1,200",
        label: "ساعة تطوير وتصميم",
        sub: "كتابة واجهات معقدة وبسيطة",
        icon: FiClock,
        color: "from-amber-500 to-orange-500"
      },
      {
        id: 4,
        value: "100%",
        label: "مرونة وتجاوب الواجهات",
        sub: "توافق تام مع شاشات الهواتف والويب",
        icon: FiSmartphone,
        color: "from-emerald-500 to-teal-500"
      }
    ]
  }[lang];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-3xl border border-gray-200/50 dark:border-white/5 bg-gray-50/30 dark:bg-white/[0.01] hover:bg-gray-100/50 dark:hover:bg-white/[0.03] backdrop-blur-md relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* توهج خلفي هادئ عند تحويم الماوس */}
            <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />

            <div className="flex items-center justify-between mb-6">
              <span className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight font-mono`}>
                {stat.value}
              </span>
              <div className="p-3 rounded-xl bg-gray-200/50 dark:bg-white/5 border border-gray-300/30 dark:border-white/10 text-gray-700 dark:text-gray-300 group-hover:text-purple-500 transition-colors">
                <stat.icon className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h4 className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-tight mb-1">
                {stat.label}
              </h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                {stat.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}