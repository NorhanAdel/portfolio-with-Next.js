"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const { lang, theme } = useApp();

  const t = {
    en: {
      sub: "Get In Touch",
      title: "Let's Connect",
      city: "Cairo, Egypt",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locationLabel: "Location"
    },
    ar: {
      sub: "تواصل معي",
      title: "دعنا نتواصل معاً",
      city: "القاهرة، مصر",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف",
      locationLabel: "الموقع الجغرافي"
    }
  }[lang];

  const contactItems = [
    {
      id: "email",
      label: t.emailLabel,
      value: "noura.adel.sayed.me@gmail.com",
      href: "mailto:noura.adel.sayed.me@gmail.com",
      icon: FiMail,
    },
    {
      id: "phone",
      label: t.phoneLabel,
      value: "+20 102 984 3501",
      href: "tel:+201029843501",
      icon: FiPhone,
    },
    {
      id: "location",
      label: t.locationLabel,
      value: t.city,
      href: "#",
      icon: FiMapPin,
    }
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200/10 dark:border-white/5 relative z-10">
      <div className="mb-16 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-purple-600 dark:text-purple-400 block mb-3">
          {t.sub}
        </span>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
          {t.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {contactItems.map((item, idx) => (
          <motion.a
            key={item.id}
            href={item.href}
            target={item.id !== "location" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="p-8 rounded-3xl border border-gray-200/50 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] hover:bg-gray-100 dark:hover:bg-white/[0.03] backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 hover:border-purple-500/40 group shadow-sm hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="p-4 rounded-2xl bg-purple-500/10 dark:bg-purple-500/5 border border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 mb-6">
              <item.icon className="w-6 h-6" />
            </div>
            
            <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              {item.label}
            </span>
            
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-all">
              {item.value}
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div 
        className="mt-12 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a 
          href="https://github.com/NorhanAdel" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white border border-gray-200 dark:border-white/10 transition-all shadow-sm"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/norhan-adel-8ba0a3351" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white border border-gray-200 dark:border-white/10 transition-all shadow-sm"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}