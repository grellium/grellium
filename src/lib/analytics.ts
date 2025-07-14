// src/lib/analytics.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Optional: Custom page view tracker (for events or SPA navigation)
export const pageview = (url: string) => {
  if (!GA_ID) return;
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// Optional: Custom event tracker
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_ID) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
