import { MetadataRoute } from "next";

/**
 * This file creates a sitemap (sitemap.xml) for the application. Learn more about sitemaps in Next.js here: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * Be sure to update the `changeFrequency` and `priority` values to match your application's content.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-founder-hour.com"; // Update with your actual domain
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/sales`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
