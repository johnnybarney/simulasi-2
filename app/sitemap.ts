import type { MetadataRoute } from "next";

const BASE_URL = "https://simulasi.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/tsx`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/ittx`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/asx`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/attack-simulation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/recon-intelligence`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/cd-x`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/mni-x-3d-kit`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/platform/cd-x`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
