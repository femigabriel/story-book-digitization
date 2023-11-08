import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka&family=Jost&display=swap"
          rel="stylesheet"
        />
        <title>Book Digitization</title>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
