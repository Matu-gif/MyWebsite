"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Instagram, ArrowDown } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Matu-gif", label: "GitHub", icon: Github },
  { href: "https://x.com/MatusTT12", label: "X", icon: Twitter },
  {
    href: "https://www.instagram.com/matu1230k/",
    label: "Instagram",
    icon: Instagram,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-3xl">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#111111] text-xs text-[#a1a1aa] font-mono"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Focused on my current work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-4"
        >
          Shota{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#818cf8]">
            Matsu
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#a1a1aa] font-mono mb-6"
        >
          Software Developer
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6366f1] hover:bg-[#818cf8] text-white text-sm font-medium transition-colors"
          >
            View Works
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#27272a] hover:border-[#6366f1] text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-5"
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#52525b] hover:text-[#6366f1] transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#52525b] flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
