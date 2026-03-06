import type { Work } from "@/types";

export const works: Work[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio Website",
    description:
      "Next.js 15 + TypeScript + Tailwind CSS v4で構築した個人ポートフォリオサイト。Framer Motionによるアニメーション、Server Actionsによるお問い合わせフォームを実装。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Matu-gif/portfolio",
    demo: "https://shota-matsu.vercel.app",
    featured: true,
    date: "2024-03",
  },
  {
    slug: "example-app",
    title: "Example App", // TODO: 実際の制作物に変更
    description:
      "サンプルWebアプリケーション。RESTful APIとReactフロントエンドで構成。",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Matu-gif/example-app",
    featured: true,
    date: "2023-10",
  },
  {
    slug: "another-project",
    title: "Another Project", // TODO: 実際の制作物に変更
    description:
      "個人開発プロジェクト。詳細はGitHubをご覧ください。",
    tags: ["TypeScript", "React", "Vercel"],
    github: "https://github.com/Matu-gif",
    featured: true,
    date: "2023-06",
  },
];
