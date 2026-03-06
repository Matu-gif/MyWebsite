"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { hobbies } from "@/data/hobbies";

export default function HobbiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hobbies" className="py-28 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
          ◻️ Hobbies
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          趣味・人柄
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111111] border border-[#27272a] rounded-xl p-6 hover:border-[#6366f1]/40 transition-colors flex flex-col gap-3"
            >
              <span className="text-3xl">{hobby.emoji}</span>
              <h3 className="text-sm font-semibold text-white">
                {hobby.title}
              </h3>
              <p className="text-xs text-[#71717a] leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
