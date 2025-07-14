# 🔍 SEO Utility (`seo.ts`)

Generates dynamic metadata for pages using a consistent and SEO-friendly format. Ideal for use with Next.js App Router's `generateMetadata()`.

## ✅ Usage

Import and use in any `page.tsx` or `layout.tsx`:

```ts
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shop Premium Products",
  description: "Browse the best items in our store.",
  urlPath: "/(shop)/products",
  image: "/images/products-banner.png",
});
```

## 🛠️ Parameters

| Parameter | Type | Required | Default |
|-----------|------|----------|---------|
| `title` | string | ✅ Yes | — |
| `description` | string | ❌ No | "Buy premium products at our online store." |
| `urlPath` | string | ❌ No | "/" |
| `image` | string | ❌ No | "/default-og.png" |

## 🌐 Domain Setup

Set your base domain in `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

And inside `seo.ts`, use:

```ts
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
```

## 💡 Highlights

* 🧠 Smart defaults for Open Graph & Twitter Cards
* 🔁 Reusable across pages/layouts
* 📦 Works seamlessly with `generateMetadata()` in App Router