import React from "react";
import Head from "next/head";

const Seo: React.FC<any> = React.memo(({ title, description, image }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        {image && (
          <React.Fragment>
            <meta property="og:image" content={image.url} />
            <meta property="og:url" content={image.url} />
            <meta name="twitter:card" content="summary_large_image" />
          </React.Fragment>
        )}
      </Head>
    </React.Fragment>
  );
});
export default Seo;
