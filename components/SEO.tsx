import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  schema?: object;
  localCity?: string;
}

const siteConfig = {
  name: 'Bold Blank Studio',
  baseUrl: 'https://boldblank.com',
  defaultDescription: 'Premium Branding and Website Design Agency in India. We engineer strategic brand identities and high-performance websites for ambitious companies.',
  defaultOgImage: '/images/og-image.jpg', // Ensure this exists in public folder
  twitterHandle: '@boldblank',
};

const hyderabadLocalSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Bold Blank Studio",
  "image": "https://boldblank.com/images/og-image.jpg",
  "description": "Premium Branding and Website Design Agency in Hyderabad, India. We engineer strategic brand identities and high-performance websites for ambitious companies.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jubilee Hills, Road No. 36",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500033",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.432524,
    "longitude": 78.407065
  },
  "url": "https://boldblank.com",
  "telephone": "+91-9000000000",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://twitter.com/boldblank"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Hyderabad",
      "sameAs": "https://en.wikipedia.org/wiki/Hyderabad"
    },
    {
      "@type": "State",
      "name": "Telangana",
      "sameAs": "https://en.wikipedia.org/wiki/Telangana"
    }
  ]
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image',
  schema,
  localCity,
}) => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.defaultDescription;
  const url = canonicalUrl || siteConfig.baseUrl;
  const image = ogImage || siteConfig.defaultOgImage;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Geo Meta Tags for Local SEO */}
      {localCity === 'Hyderabad' && (
        <>
          <meta name="geo.region" content="IN-TG" />
          <meta name="geo.placename" content="Hyderabad" />
          <meta name="geo.position" content="17.432524;78.407065" />
          <meta name="ICBM" content="17.432524, 78.407065" />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      {siteConfig.twitterHandle && <meta name="twitter:site" content={siteConfig.twitterHandle} />}

      {/* JSON-LD Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Local Business Schema Markup */}
      {localCity === 'Hyderabad' && (
        <script type="application/ld+json">
          {JSON.stringify(hyderabadLocalSchema)}
        </script>
      )}
    </Helmet>
  );
};
