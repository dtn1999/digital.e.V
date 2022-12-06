import { GOOGLE_ANALYTICS_ID } from "@app/utils/envVariables";
import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "src/components/meta/GoogleAnalytics";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.syncfusion.com/ej2/material.css"
          type="text/css"
        />
      </Head>
      <body className="flex min-h-full w-full grow flex-col">
        <Main />
        <div id="destination" />
        <NextScript />
        <GoogleAnalytics GOOGLE_ANALYTICS_ID={GOOGLE_ANALYTICS_ID} />
      </body>
    </Html>
  );
}
