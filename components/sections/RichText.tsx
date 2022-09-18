import React from "react";
import cn from "classnames";
import { RichText as GraphCmsRichTextRenderer } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

interface Props {
  value: any;
}
const RichText: React.FC<Props> = React.memo(({ value }) => {
  return (
    <div>
      <GraphCmsRichTextRenderer
        content={value}
        renderers={{
          p: ({ children }) => (
            <p className="my-4 text-lg font-light leading-8">{children}</p>
          ),
          img: ({ altText, handle, width, height, title, src }) => (
            <Image
              src={src as string}
              width={width}
              height={height}
              layout="responsive"
              objectFit="cover"
              alt={altText || title}
            />
          ),
          a: ({ href, children }) => (
            <a className="text-accent" href={href}>
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
});
export default RichText;
