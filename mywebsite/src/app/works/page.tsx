import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Works | Shota Matsu",
  description: "Shota Matsuの制作実績一覧",
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
          Works
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          制作実績
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work) => (
            <div
              key={work.slug}
              className="group bg-[#111111] border border-[#27272a] rounded-xl p-6 flex flex-col gap-4 hover:border-[#6366f1]/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-semibold text-white group-hover:text-[#818cf8] transition-colors">
                  {work.title}
                </h2>
                <span className="text-xs text-[#52525b] font-mono shrink-0">
                  {work.date}
                </span>
              </div>

              <p className="text-sm text-[#71717a] leading-relaxed flex-1">
                {work.description}
              </p>

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
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
