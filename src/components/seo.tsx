import Head from "next/head";

export const SEO = ({
  isProfile,
  children,
}: {
  isProfile?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <Head>
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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />

      <title>impeaking.at</title>
      <meta name="title" content="impeaking.at" />
      <meta
        name="description"
        content="all your speaking events in one place. create your own page."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://imspeaking.at/" />
      <meta property="og:title" content="impeaking.at" />
      <meta
        property="og:description"
        content="all your speaking events in one place. create your own page."
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://imspeaking.at/" />
      <meta property="twitter:title" content="impeaking.at" />
      <meta
        property="twitter:description"
        content="all your speaking events in one place. create your own page."
      />
    </Head>
  );
};
