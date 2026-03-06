"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { careerItems } from "@/data/career";
import type { CareerItem } from "@/types";

function CompanyLink({ company, url }: { company: string; url?: string }) {
  const content = (
    <span className="relative inline-block group/company">
      {company}
      <span className="absolute left-0 bottom-0 h-px w-full bg-[#6366f1] origin-left scale-x-0 group-hover/company:scale-x-100 transition-transform duration-300 ease-out" />
    </span>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#6366f1] font-mono mt-0.5 inline-block hover:text-[#818cf8] transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <p className="text-sm text-[#6366f1] font-mono mt-0.5">{company}</p>
  );
}

const JOB_TYPE_LABEL: Record<
  NonNullable<CareerItem["jobType"]>,
  { label: string; className: string }
> = {
  intern: {
    label: "インターン",
    className:
      "bg-[#6366f1]/10 border-[#6366f1]/30 text-[#818cf8]",
  },
  "part-time-long": {
    label: "長期アルバイト",
    className:
      "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
  "part-time-short": {
    label: "短期アルバイト",
    className:
      "bg-sky-200/5 border-sky-200/15 text-sky-200",
  },
  "full-time": {
    label: "正社員",
    className:
      "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
};

export default function CareerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-28 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
          ◻️ Career
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          職歴
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[#27272a] hidden sm:block" />

          <div className="space-y-10">
            {careerItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="sm:pl-10 relative"
              >
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0a0a0a] border border-[#27272a] items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.current ? "bg-[#6366f1]" : "bg-[#52525b]"
                    }`}
                  />
                </div>

                <div className="bg-[#111111] border border-[#27272a] rounded-xl p-6 hover:border-[#6366f1]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h3 className="text-base font-semibold text-white">
                          {item.role}
                        </h3>
                        {item.jobType && (
                          <span
                            className={`px-2 py-0.5 text-xs border rounded-full font-mono ${
                              JOB_TYPE_LABEL[item.jobType].className
                            }`}
                          >
                            {JOB_TYPE_LABEL[item.jobType].label}
                          </span>
                        )}
                      </div>
                      <CompanyLink company={item.company} url={item.url} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#52525b] font-mono">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-2 py-0.5 text-xs bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#818cf8] rounded-full font-mono">
                          現在
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#71717a]">
                        <span className="text-[#6366f1] shrink-0">›</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
