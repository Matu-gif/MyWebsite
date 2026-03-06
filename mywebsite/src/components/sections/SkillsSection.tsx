"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-colors ${
            i < level ? "bg-[#6366f1]" : "bg-[#27272a]"
          }`}
        />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
        ◻️ Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          スキルセット
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#111111] border border-[#27272a] rounded-xl p-5 hover:border-[#6366f1]/40 transition-colors"
            >
              <h3 className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#e4e4e7]">
                        {skill.name}
                      </span>
                    </div>
                    <SkillBar level={skill.level} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
