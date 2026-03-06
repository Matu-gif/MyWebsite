"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { works } from "@/data/works";

function WorkCard({
  work,
  index,
  inView,
}: {
  work: (typeof works)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-[#111111] border border-[#27272a] rounded-xl p-6 flex flex-col gap-4 hover:border-[#6366f1]/40 transition-colors"
    >
      {/* Top: title + date */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-white group-hover:text-[#818cf8] transition-colors">
          {work.title}
        </h3>
        <span className="text-xs text-[#52525b] font-mono shrink-0">
          {work.date}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#71717a] leading-relaxed flex-1">
        {work.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono bg-[#1a1a1a] border border-[#27272a] text-[#a1a1aa] rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-1">
        {work.github && (
          <a
            href={work.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {work.demo && (
          <a
            href={work.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function WorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featuredWorks = works.filter((w) => w.featured).slice(0, 3);

  return (
    <section id="works" className="py-28 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
          ◻️ Works
        </span>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            制作実績
          </h2>
          <Link
            href="/works"
            className="text-sm text-[#a1a1aa] hover:text-white transition-colors underline underline-offset-4"
          >
            すべて見る →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredWorks.map((work, i) => (
            <WorkCard key={work.slug} work={work} index={i} inView={inView} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
