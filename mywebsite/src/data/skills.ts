import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 4 },
      { name: "HTML / CSS", level: 5 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "REST API", level: 5 },
      { name: "GraphQL", level: 3 },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Vercel", level: 5 },
      { name: "Docker", level: 3 },
      { name: "GitHub Actions", level: 4 },
      { name: "AWS", level: 3 },
    ],
  },
];
