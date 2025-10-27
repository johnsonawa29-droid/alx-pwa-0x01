import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to your PWA manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Set a theme color for your PWA */}
        <meta name="theme-color" content="#0070f3" />

        {/* Recommended: add icons for iOS and Android */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <link rel="icon" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" sizes="310x310" href="/icons/ms-icon-310x310.png" />

        {/* You can also add other meta tags like description, author, etc. */}
        <meta name="description" content="Cine Seek – Discover and explore movies effortlessly!" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
