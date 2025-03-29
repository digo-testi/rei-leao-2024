import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Veja as fotos do nosso rei leão"
          />
          <meta property="og:site_name" content="rei-leao-2025.vercel.app" />
          <meta
            property="og:description"
            content="Veja as fotos do nosso rei leão"
          />
          <meta property="og:title" content="Veja as fotos do nosso rei leão" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Veja as fotos do nosso rei leão" />
          <meta
            name="twitter:description"
            content=""
          />
        </Head>
        <body className="bg-neutral-300 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
