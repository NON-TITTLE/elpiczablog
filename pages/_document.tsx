import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="me" href="https://mastodon.social/@amazing_pizzadev" />
        <link rel="me" href="https://me.pizza.blog" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 