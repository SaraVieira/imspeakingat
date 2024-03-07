import Head from "next/head";

export const SEO = ({
  isProfile,
  children,
  title = "impeaking.at",
  description = "all your speaking events in one place. create your own page.",
  url = "https://imspeaking.at/",
}: {
  isProfile?: boolean;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
}) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://imspeaking.at/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://imspeaking.at/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://imspeaking.at/favicon-16x16.png"
      />
      <link rel="manifest" href="https://imspeaking.at/site.webmanifest" />
      <link
        rel="mask-icon"
        href="https://imspeaking.at/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />

      <title>impeaking.at</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {isProfile ? (
        children
      ) : (
        <>
          <meta property="og:image" content="https://imspeaking.at/meta.png" />
          <meta
            property="twitter:image"
            content="https://imspeaking.at/meta.png"
          />
        </>
      )}
    </Head>
  );
};
