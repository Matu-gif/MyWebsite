"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください").max(100),
  email: z.string().email("有効なメールアドレスを入力してください"),
  subject: z.string().min(1, "件名を入力してください").max(200),
  message: z.string().min(10, "メッセージは10文字以上で入力してください").max(5000),
  honeypot: z.string().max(0, ""),
});

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    honeypot: formData.get("honeypot") ?? "",
  };

  const result = ContactSchema.safeParse(raw);

  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? "入力内容を確認してください";
    return { status: "error", message: firstError };
  }

  // Resendが設定されている場合はここで送信
  // const apiKey = process.env.RESEND_API_KEY;
  // if (apiKey) {
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(apiKey);
  //   await resend.emails.send({
  //     from: "Portfolio <onboarding@resend.dev>",
  //     to: process.env.CONTACT_EMAIL ?? "",
  //     subject: `[Portfolio] ${result.data.subject}`,
  //     text: `From: ${result.data.name} <${result.data.email}>\n\n${result.data.message}`,
  //   });
  // }

  // TODO: RESEND_API_KEY と CONTACT_EMAIL を .env.local に設定して上記コメントアウトを解除
  console.log("Contact form submission:", result.data);

  return { status: "success" };
}
