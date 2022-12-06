import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
interface Props {
  blok: any;
}
const FooterMenuLink: React.FC<Props> = React.memo(({ blok }) => {
  const { href, label } = blok;
  return (
    <div {...storyblokEditable(blok)} className={cn("mx-4")}>
      <Link href={href.cached_url}>
        <a className="whitespace-nowrap uppercase underline hover:text-primary">
          {label}
        </a>
      </Link>
    </div>
  );
});
export default FooterMenuLink;
