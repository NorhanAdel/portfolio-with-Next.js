"use client";

import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { portfolioData } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

export default function ProjectsSection() {
  const { lang } = useApp();
  const t = portfolioData[lang].projects;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeProject = t.items.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 relative z-10">
      <AnimatePresence mode="wait">
        {!selectedId ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-20 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-purple-500 block mb-3">{t.sub}</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">{t.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.items.map((project, index) => (
                <motion.div
                  key={project.id}
                  layoutId={`card-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  className="group relative rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] overflow-hidden backdrop-blur-md flex flex-col justify-between cursor-pointer transition-all duration-300 border-b-purple-500/20 hover:border-purple-500/40"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-56 w-full overflow-hidden relative">
                    <motion.img
                      layoutId={`img-${project.id}`}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060211] via-black/20 to-transparent" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-mono text-purple-400 tracking-widest">{project.id} // ARCHIVE</span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          {project.tech[0]}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{project.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
                      <span className="text-xs font-medium text-purple-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-flex items-center gap-2">
                        {t.viewDetails} &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          activeProject && (
            <ProjectDetails
              project={activeProject}
              lang={lang}
              t={t}
              onBack={() => setSelectedId(null)}
            />
          )
        )}
      </AnimatePresence>
    </section>
  );
}