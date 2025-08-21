import Head from 'next/head';
import Script from 'next/script'; // Import next/script

export const SeoHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  schema 
}) => {
  return (
    <Head>
      {/* Title Tag */}
      <title>{title}</title>

      {/* Meta Description */}
      {description && (
        <meta name="description" content={description} />
      )}

      {/* Meta Keywords (Optional, less impact on Google SEO but can be useful) */}
      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      {/* Canonical URL */}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}

      {/* Open Graph / Social Media Meta Tags (Optional but recommended) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" /> {/* Or 'article', 'product', etc. */}
      {/* Add og:image, twitter:card, etc. as needed */}

      {/* Schema Markup */}
      {schema && (
        <Script
          id={`schema-${schema['@type'] || 'default'}`} // Unique ID for the script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};