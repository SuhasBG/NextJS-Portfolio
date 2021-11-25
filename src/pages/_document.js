import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Suhas B G Web Development & Data Sciene"
          />
          <meta
            name="description"
            content="Hey there, This is Suhas B G. I am a Web Developer & Data Scientist who is eager to learn new things"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Suhas B G Web Development & Data Sciene"
          />
          <meta
            property="og:description"
            content="Hey there, This is Suhas B G. I am a Web Developer & Data Scientist who is eager to learn new things"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Suhas B G Web Development & Data Sciene"
          />
          <meta
            property="twitter:description"
            content="Hey there, This is Suhas B G. I am a Web Developer & Data Scientist who is eager to learn new things"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
