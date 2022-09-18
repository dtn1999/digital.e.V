import React from "react";
import Script from "next/script";

interface Props {
  GOOGLE_ANALYTICS_ID: string;
}

const GoogleAnalytics: React.FC<Props> = React.memo(
  ({ GOOGLE_ANALYTICS_ID }) => {
    return (
      <React.Fragment>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="GOOGLE_ANALYTICS">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </React.Fragment>
    );
  }
);
export default GoogleAnalytics;
