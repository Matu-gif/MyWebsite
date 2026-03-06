"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
      {children}
    </h2>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionTag>◻️ About</SectionTag>
        <SectionTitle>自己紹介</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-52 h-52 rounded-2xl bg-[#111111] border border-[#27272a] overflow-hidden flex items-center justify-center">
              <Image src="/dog.png" alt="Shota Matsu" fill className="object-cover" />
              {/* <span className="text-6xl select-none">👨‍💻</span> */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4">
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              はじめまして、<span className="text-white font-medium">松尾 翔太（マツオ ショウタ）</span>と申します。<br/>
              現在、19歳で、今年大学2年生になります。
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              将来は、Webエンジニアとして、生成AIを活用したサービス開発・運用に携わりたいと考えています。
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              現在はK-PASSという塾のWebシステム・サイトの開発・運用に従事しており、現場のフィードバックを反映したサイト更新やコンテンツ制作などに取り組んでおります。
              また、データベース設計やセキュリティに加え、バイブコーディングを通じた実践的な開発力の向上にも注力しており、ソフトウェアエンジニアとして多角的な成長を続けていく所存です。
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
