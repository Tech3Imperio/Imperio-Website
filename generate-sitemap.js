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
  { url: "/career", changefreq: "weekly", priority: 0.8 },
  { url: "/blog/modernterrace", changefreq: "weekly", priority: 0.8 },
  { url: "/blog/modernstaircase", changefreq: "weekly", priority: 0.8 },
  { url: "/blog/modernhandrail", changefreq: "weekly", priority: 0.8 },
  { url: "/blog/modernbalcony", changefreq: "weekly", priority: 0.8 },
  { url: "/quote", changefreq: "yearly", priority: 0.8 },
  { url: "/contactus", changefreq: "yearly", priority: 0.6 },
  { url: "/privacypolicy", changefreq: "yearly", priority: 0.6 },
  {
    url: "/blog/balcony-railing-safety-standards",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/exciting-new-glass-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/unobstructed-pool-glass-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/stylish-glass-functional-spaces",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/railings-meet-natures-embrace",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/modern-railings-aesthetic-appeal",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/seamless-views-modern-railings",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/handrails-key-benefits-considerations",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/happy-diwali-from-imperio-railing-systems",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog/elevate-your-space-with-sleek-glass-railings",
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
