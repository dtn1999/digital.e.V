import React from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../common/Button";

interface Props {
  links: any[];
  ctas: any[];
  isMobile: boolean;
  onLinkClick?: (link: any) => void;
  activeLink?: string;
  isSticky?: boolean;
}

const NavCtas: React.FC<{ ctas: any[]; isSticky?: boolean }> =
  React.memo(({ ctas }) => {
    const router = useRouter();
    const handleClick = React.useCallback(
      (to: string) => {
        router.push(`/${to.replace("/", "")}`);
      },
      [router]
    );

    return (
      <React.Fragment>
        {ctas.map((cta) => (
          <Button
            key={cta.id}
            variant="solid"
            onClick={() => handleClick((cta.link as any)?.slug)}
            className="hidden text-sm font-medium lg:flex lg:text-xs"
          >
            <span>{cta.label}</span>
          </Button>
        ))}
      </React.Fragment>
    );
  });

const NavLinks: React.FC<Props> = React.memo(
  ({ links, isMobile, activeLink, ctas }) => {
    const formatLink = React.useCallback(
      (link: string) => `/${link === "home" ? "" : link}`,
      []
    );

    const isActiveLink = React.useCallback(
      (link: string) => {
        const currentLink = link === "home" ? "" : link;
        return currentLink === activeLink?.replace("/", "");
      },
      [activeLink]
    );

    if (isMobile) {
      return (
        <nav className="h-full w-full">
          <ul className="flex flex-col items-start px-8 pt-2">
            {links.map(({ href, label }) => (
              <li key={href} className={cn("")}>
                <Link href={formatLink(href)}>
                  <a
                    className={cn({
                      "block py-3 relative text-xs font-medium uppercase hover:text-primary cursor-pointer":
                        true,
                      "border-l border-t border-b border-primary":
                        isActiveLink(href),
                    })}
                  >
                    <span className="whitespace-nowrap py-2 pl-3 pr-1">
                      {label}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
            <NavCtas ctas={ctas} />
          </ul>
        </nav>
      );
    }

    return (
      <nav className="flex w-full items-center">
        <ul className="flex xl:mr-11 ">
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={cn({
                "relative py-7 px-3": true,
              })}
            >
              <Link href={formatLink(href)}>
                <a
                  className={cn({
                    "relative text-xs font-normal uppercase hover:text-primary cursor-pointer whitespace-nowrap":
                      true,
                    "after:h-2 after:-bottom-1 after:text-transparent after:w-full after:absolute after:content-[''] after:table after:bg-primary":
                      isActiveLink(href),
                  })}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <NavCtas ctas={ctas} />
      </nav>
    );
  }
);
export default NavLinks;
