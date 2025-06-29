import Head from "next/head";

export default function PageSEO({
  title = "Developer Portfolio",
  description = "A showcase of my featured and recent projects.",
  ogImage = "/og-image.png",
  canonical = "https://yourdomain.com",
  twitterCard = "summary_large_image",
  twitterTitle = title,
  twitterDescription = description,
  twitterImage = ogImage,
}: {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    </Head>
  );
}
