// src/lib/seo.ts

export type MetadataParams = {
  title: string;
  description?: string;
  urlPath?: string;
  image?: string;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; // fallback in dev

export function buildMetadata({
  title,
  description = "Buy premium products at our online store.",
  urlPath = "/",
  image = "/default-og.png",
}: MetadataParams) {
  const fullUrl = `${BASE_URL}${urlPath}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
