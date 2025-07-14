# 📊 Google Analytics Utility (`analytics.ts`)

A minimal and flexible helper to inject Google Analytics (GA4) tracking into your app. Designed for optional use with clean fallback behavior.

## 🔑 Step 1: Add Your GTag ID

In `.env.local`:

```env
NEXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX
```

## 🧩 Step 2: Inject Analytics in Layout

Add it inside any layout file (e.g. `layout.tsx`):

```ts
import { injectAnalytics } from "@/lib/analytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {injectAnalytics()}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🛠️ Features

* ✅ **Safe** – Injects only if `NEXT_PUBLIC_GTAG_ID` is set
* 🧘 **Optional** – Add only where needed
* ⚡ **Lightweight** – No third-party packages required

## ❌ Disabling

* 🔇 **Globally**: Remove `NEXT_PUBLIC_GTAG_ID` from `.env.local`
* 🔕 **Per Page/Layout**: Skip calling `injectAnalytics()` in that file

## 📌 Notes

* Sends `page_view` on initial load
* Extend with custom events via `window.gtag()` when needed