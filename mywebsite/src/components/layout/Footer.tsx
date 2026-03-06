import { Github, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Matu-gif",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://x.com/MatusTT12",
    label: "X (Twitter)",
    icon: Twitter,
  },
  {
    href: "https://www.instagram.com/example/",
    label: "Instagram",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#a1a1aa] font-mono">
          © {new Date().getFullYear()} Shota Matsu. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#a1a1aa] hover:text-white transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
