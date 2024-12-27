// // src/components/Metadata.tsx
// import React from "react";
// import { Helmet } from "react-helmet";

// interface MetadataProps {
//   title: string;
//   description: string;
//   keywords: string;
//   ogImage: string;
//   ogUrl: string;
// }

// const Metadata: React.FC<MetadataProps> = ({
//   title,
//   description,
//   keywords,
//   ogImage,
//   ogUrl,
// }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />

//       {/* Open Graph */}
//       <meta name="og:title" content={title} />
//       <meta name="og:description" content={description} />
//       <meta name="og:image" content={ogImage} />
//       <meta name="og:url" content={ogUrl} />
//       <meta name="og:type" content="website" />
//       <meta name="og:locale" content="en_US" />
//       <meta name="og:site_name" content="Imperio Railing Systems" />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:site" content="@ImperioRailing" />
//       <meta name="twitter:creator" content="@ImperioRailing" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={ogImage} />
//       <meta name="twitter:url" content={ogUrl} />

//       {/* General SEO */}
//       <meta name="robots" content="index, follow" />
//       <link rel="canonical" href={ogUrl} />

//       {/* Apple & Mobile Web App */}
//       <meta name="apple-mobile-web-app-title" content="Imperio Railing" />
//       <meta name="apple-mobile-web-app-capable" content="yes" />
//       <meta name="mobile-web-app-capable" content="yes" />
//       <meta
//         name="apple-mobile-web-app-status-bar-style"
//         content="black-translucent"
//       />
//       <meta name="theme-color" content="#000000" />
//       <meta name="msapplication-TileColor" content="#ffffff" />
//       <meta name="msapplication-TileImage" content={ogImage} />

//       {/* Replace with the actual image path */}
//       <meta name="application-name" content="Imperio Railing" />

//       {/* Verification and Security */}
//       <meta
//         name="google-site-verification"
//         content="Jag-BllwifwrjxiFPU3EuK9YuYT1OeDghsVVIOaPuhU"
//       />

//       {/* Other Useful Tags */}
//       <meta name="author" content="Imperio Railing" />
//       <meta name="copyright" content="2023 Imperio Railing" />
//       <meta name="language" content="en-US" />
//       <meta name="expires" content="Wed, 30 Aug 2023 00:00:00 GMT" />
//       <meta name="distribution" content="global" />

//       {/* Additional Meta Tags */}
//       <meta name="subject" content="Get a Quote for Glass Railings" />
//       <meta name="rating" content="General" />
//       <meta name="revisit-after" content="1 month" />
//       <meta name="pragma" content="no-cache" />
//       <meta
//         name="cache-control"
//         content="no-cache, no-store, must-revalidate"
//       />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta name="referrer" content="no-referrer-when-downgrade" />
//       <meta name="msapplication-navbutton-color" content="#000000" />
//       <meta name="msapplication-starturl" content={ogUrl} />
//       <meta name="publisher" content="Imperio Railing" />
//     </Helmet>
//   );
// };

// export default Metadata;

import React from "react";
import { Helmet } from "react-helmet";
import { whiteLogo } from "../../assets/Images";
interface MetadataProps {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  ogUrl: string;
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
}) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />

      {/* Meta Keywords */}
      <meta name="keywords" content={keywords} />

      {/* Open Graph (OG) Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Imperio Railing Systems" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ImperioRailing" />
      <meta name="twitter:creator" content="@ImperioRailing" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={ogUrl} />

      {/* Canonical Link */}
      <link rel="canonical" href={ogUrl} />

      {/* SEO - Robots */}
      <meta name="robots" content="index, follow" />

      {/* Apple and Mobile Web App Meta Tags */}
      <meta name="apple-mobile-web-app-title" content="Imperio Railing" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={ogImage} />
      <meta name="application-name" content="Imperio Railing" />

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Imperio Railing",
            "url": "${ogUrl}",
            "logo": ${whiteLogo},  // Replace with actual logo URL
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8591953385",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/ImperioRailing",
              "https://twitter.com/ImperioRailing",
              "https://www.instagram.com/ImperioRailing"
            ]
          }
        `}
      </script>

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="Jag-BllwifwrjxiFPU3EuK9YuYT1OeDghsVVIOaPuhU"
      />

      {/* Additional Meta Tags */}
      <meta name="author" content="Imperio Railing Systems" />
      <meta name="copyright" content="2023 Imperio Railing" />
      <meta name="language" content="en-US" />
      <meta name="expires" content="Wed, 30 Aug 2023 00:00:00 GMT" />
      <meta name="distribution" content="global" />

      {/* Meta for better indexing */}
      <meta
        name="subject"
        content="Premium Glass Railings for Homes and Commercial Spaces"
      />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 month" />
      <meta name="pragma" content="no-cache" />
      <meta
        name="cache-control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="msapplication-starturl" content={ogUrl} />
      <meta name="publisher" content="Imperio Railing" />
    </Helmet>
  );
};

export default Metadata;
