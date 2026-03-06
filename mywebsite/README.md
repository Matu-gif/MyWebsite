# Shota Matsu — Portfolio Website

個人ポートフォリオサイト。Next.js 15 + TypeScript + Tailwind CSS v4 で構築。

---

## コンセプト

**「エンジニアの技術力 × 人柄」を3層のターゲットに伝えるポートフォリオ**

| ターゲット | 期待するアクション |
|---|---|
| 企業の採用担当者 | スカウト・問い合わせ |
| フリーランス案件を振ってくれる人 | 問い合わせ・SNS経由でDM |
| 友人・知人 | 「こんな人なんだ」という理解 |

---

## デザイン方針

- **トーン＆マナー:** モダン・ミニマル（余白重視、洗練された印象）
- **モード:** ダークモード固定
- **カラーパレット:**
  - Background: `#0A0A0A`
  - Surface: `#111111` / `#1A1A1A`
  - Text primary: `#FFFFFF`
  - Text secondary: `#A1A1AA`
  - Accent: `#6366F1` (Indigo)
  - Border: `#27272A`

---

## サイト構造

```
/                    ← Home (1ページSPA)
  ├── #hero          Hero: キャッチコピー + CTA
  ├── #about         自己紹介
  ├── #skills        スキルセット
  ├── #works         制作実績（カード一覧、/worksへリンク）
  ├── #career        職歴タイムライン
  ├── #hobbies       趣味・人柄
  └── #contact       お問い合わせフォーム

/works               ← 実績一覧ページ
/works/[slug]        ← 実績詳細ページ
```

---

## 技術スタック

| カテゴリ | 採用技術 |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Email | Resend + Server Actions |
| Deploy | Vercel |

---

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

### 環境変数

`.env.local` を作成して以下を設定するとお問い合わせフォームのメール送信が有効になります。

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
```

---

## コンテンツの更新方法

| ファイル | 内容 |
|---|---|
| `src/data/career.ts` | 職歴 |
| `src/data/works.ts` | 制作実績 |
| `src/data/skills.ts` | スキルセット |
| `src/data/hobbies.ts` | 趣味 |
| `public/` | 画像ファイル |

---

## デプロイ

Vercel へのデプロイは以下のボタンから：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
