import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { works } from "@/data/works";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | Shota Matsu`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Works
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
            {work.date}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">{work.title}</h1>
          <p className="text-[#71717a] leading-relaxed">{work.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-[#111111] border border-[#27272a] text-[#a1a1aa] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mb-12 pb-12 border-b border-[#27272a]">
          {work.github && (
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] border border-[#27272a] hover:border-[#6366f1]/40 text-sm text-[#a1a1aa] hover:text-white rounded-lg transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {work.demo && (
            <a
              href={work.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1] hover:bg-[#818cf8] text-sm text-white rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>

        {/* Content placeholder */}
        <div className="prose prose-invert max-w-none text-[#a1a1aa]">
          {work.content ? (
            <p>{work.content}</p>
          ) : (
            <p className="text-[#52525b] text-sm">
              詳細コンテンツは準備中です。GitHubをご覧ください。
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
