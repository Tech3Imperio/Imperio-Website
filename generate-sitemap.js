import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// URLs to include in the sitemap
const urls = [
  { url: "/", changefreq: "monthly", priority: 0.8 },
  { url: "/aboutus", changefreq: "yearly", priority: 0.8 },
  { url: "/products", changefreq: "yearly", priority: 0.8 },
  { url: "/projects", changefreq: "yearly", priority: 0.8 },
  { url: "/dealership", changefreq: "yearly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.8 },
  { url: "/careers", changefreq: "weekly", priority: 0.8 },
  {
    url: "/careers/Business%20Development%20Executive",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Digital%20Marketing%20Executive",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Inside%20Sales%20Executive",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Business%20Development%20(Sales)",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Architecture",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Video%20Editing%2FMaking",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Interior%20Design",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Brand%20Management",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/careers/Social%20Media%20Marketing",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/blog/terrace/glass-railing",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/blog/modern/staircase-glass-railing",
    changefreq: "weekly",
    priority: 0.8,
  },
  { url: "/blog/aluminum-handrail", changefreq: "weekly", priority: 0.8 },
  {
    url: "/blog/modern/balcony-glass-railing",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/blog/pvb-sgp/glass-difference",
    changefreq: "weekly",
    priority: 0.8,
  },
  { url: "/quote", changefreq: "yearly", priority: 0.8 },
  { url: "/contactus", changefreq: "yearly", priority: 0.6 },
  { url: "/privacypolicy", changefreq: "yearly", priority: 0.6 },
  {
    url: "/blog/aluminium-glassrailings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/modern-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/pool-railing",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/aesthetic-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/premium-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/balcony-railing",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/seamless-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/handrails-benefits",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/happy-diwali",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/sleek-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  // Add more URLs as needed
];

const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(__filename);

console.log("Generating sitemap...");

const sitemap = new SitemapStream({ hostname: "https://imperiorailing.com/" });

// Write URLs to sitemap
urls.forEach((url) => sitemap.write(url));
sitemap.end();

// Write sitemap.xml file
streamToPromise(sitemap)
  .then((data) => {
    console.log("Sitemap generated successfully.");
    createWriteStream(resolve(_dirname, "public", "sitemap.xml")).write(
      data.toString()
    );
  })
  .catch((err) => {
    console.error("Error generating sitemap", err);
  });
