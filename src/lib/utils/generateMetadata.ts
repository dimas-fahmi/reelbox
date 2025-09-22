import { Metadata } from "next";

export function generateMetadata(revision?: Metadata): Metadata {
  const app_url =
    process.env.NEXT_PUBLIC_SITE_URL || "https://reelbox.dimasfahmi.pro";
  const og_image =
    process.env.NEXT_PUBLIC_OG_IMAGE ||
    "https://reelbox.dimasfahmi.pro/og-image.png";
  const twitter_image =
    process.env.NEXT_PUBLIC_TWITTER_IMAGE ||
    "https://reelbox.dimasfahmi.pro/twitter-image.png";
  const twitter_handler =
    process.env.NEXT_PUBLIC_TWITTER_HANDLER || "@reelbox_org";
  const defaultTitle = "A Place Where Movie Lover Hang Outs | ReelBox";
  const defaultDescription =
    "ReelBox is an online platform where you can watch and find information about your favorites movies and actors";

  const metadata: Metadata = {
    title: revision?.title || defaultTitle,
    description: revision?.description || defaultDescription,
    keywords: revision?.keywords || ["Movie", "Free", "Download", "TV Shows"],
    authors: revision?.authors || [
      {
        name: "ReelBox",
        url: app_url,
      },
    ],
    openGraph: {
      title: revision?.openGraph?.title || defaultTitle,
      description: revision?.openGraph?.description || defaultDescription,
      url: revision?.openGraph?.url || app_url,
      siteName: revision?.openGraph?.siteName || defaultTitle,
      images: revision?.openGraph?.images || [
        {
          url: og_image,
          width: 1200,
          height: 630,
          alt: defaultTitle,
        },
      ],
      locale: revision?.openGraph?.locale || "en_US",
    },
    twitter: {
      title: revision?.twitter?.title || defaultTitle,
      description: revision?.twitter?.description || defaultDescription,
      images: revision?.twitter?.images || [twitter_image],
      site: revision?.twitter?.site || twitter_handler,
      creator: revision?.twitter?.creator || twitter_handler,
    },
  };
  return metadata;
}
