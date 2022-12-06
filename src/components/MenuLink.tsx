import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { removePrefix } from "@app/utils/navigation";
import { useRouter } from "next/router";

interface Props {
  blok: any;
}
const MenuLink: React.FC<Props> = ({ blok }) => {
  const router = useRouter();
  const isActive = React.useMemo(
    () => (router.asPath as string).startsWith(`/${blok.href?.cached_url}`),
    [router, blok.href]
  );
  return (
    <Link href={blok.href.cached_url} {...storyblokEditable(blok)}>
      <a
        className={cn({
          "relative text-xs font-normal uppercase hover:text-primary cursor-pointer whitespace-nowrap":
            true,
          "after:h-2 after:-bottom-1 after:text-transparent after:w-full after:absolute after:content-[''] after:table after:bg-primary":
            isActive,
        })}
      >
        {blok.name}
      </a>
    </Link>
  );
};
export default MenuLink;
