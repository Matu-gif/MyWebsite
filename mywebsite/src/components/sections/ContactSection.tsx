"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const initialState: ContactState = { status: "idle" };

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [state, action, isPending] = useActionState(sendContact, initialState);

  const inputClass =
    "w-full bg-[#111111] border border-[#27272a] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#52525b] focus:outline-none focus:border-[#6366f1] transition-colors";

  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3 block">
          ◻️ Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          お問い合わせ
        </h2>
        <p className="text-[#71717a] text-sm mb-12 max-w-md leading-relaxed">
          採用・案件のご相談、お仕事のご依頼など、お気軽にどうぞ。
          通常2〜3営業日以内にご返信します。
        </p>

        {state.status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-16 text-center"
          >
            <CheckCircle size={48} className="text-green-500" />
            <p className="text-white font-medium text-lg">
              送信が完了しました！
            </p>
            <p className="text-[#a1a1aa] text-sm">
              お返事まで少々お待ちください。
            </p>
          </motion.div>
        ) : (
          <form action={action} className="max-w-xl space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              aria-hidden="true"
              className="hidden"
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-[#a1a1aa] block mb-1.5">
                  お名前 <span className="text-[#6366f1]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Shota Matsu"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-[#a1a1aa] block mb-1.5">
                  メールアドレス <span className="text-[#6366f1]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[#a1a1aa] block mb-1.5">
                件名 <span className="text-[#6366f1]">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="お仕事のご相談"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-xs text-[#a1a1aa] block mb-1.5">
                メッセージ <span className="text-[#6366f1]">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="ご用件をお書きください..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {state.status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                {state.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#818cf8] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
            >
              {isPending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  送信中...
                </>
              ) : (
                <>
                  <Send size={16} />
                  送信する
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
