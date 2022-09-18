import React from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import NavButtonMenu from "./NavButtonMenu";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { fadeInRight } from "../../../animations";

interface Props {
  links: any[];
  headerHeight: number;
  isSticky?: boolean;
  ctas: any[];
}

const NavBar = React.forwardRef<HTMLHeadElement, Props>(
  ({ links, headerHeight, ctas }, ref) => {
    // states
    const [isSticky, setIsSticky] = React.useState<boolean>(false);
    const [isMobileNavOpen, setIsMobileNavOpen] =
      React.useState<boolean>(false);
    const router = useRouter();

    // handlers
    const handleScroll = React.useCallback(() => {
      setIsSticky(window.scrollY > headerHeight);
    }, [setIsSticky, headerHeight]);

    const toggleMobileNav = React.useCallback(() => {
      setIsMobileNavOpen((prev) => !prev);
    }, []);

    // effects
    React.useEffect(() => {
      window.onscroll = handleScroll;
    }, [handleScroll]);

    return (
      <React.Fragment>
        <header
          className={cn(
            "xl:px-16 px-4 min-h-[90px] flex items-center z-[100] transition-all duration-700 bg-white",
            {
              "fixed top-0 w-full transition-all duration-700": isSticky,
            }
          )}
          ref={ref}
        >
          <div className="flex w-full items-center justify-between">
            <div
              className={cn({
                "py-3 px-4 text-sm font-black uppercase md:px-4 md:text-2xl":
                  true,
              })}
            >
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={250}
                  height={80}
                  alt="logo DIGITAL e.V"
                />
              </Link>
            </div>
            <NavButtonMenu
              isMobileNavOpen={isMobileNavOpen}
              handleClick={toggleMobileNav}
            />
          </div>
          <div className="hidden items-center px-4 py-3 lg:flex">
            <NavLinks
              activeLink={router.asPath}
              links={links}
              ctas={ctas}
              isMobile={false}
            />
          </div>
        </header>
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              className={cn({
                "absolute left-0 right-0 h-full overflow-hidden z-[90]":
                  isMobileNavOpen,
                hidden: !isMobileNavOpen,
              })}
            >
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate="show"
                exit="hidden"
                style={{ paddingTop: headerHeight }}
                className="fixed inset-y-0 right-0 z-[90] w-[80%] bg-white md:w-[40%] smd:w-1/2"
              >
                <NavLinks
                  ctas={ctas}
                  activeLink={router.pathname.replace("/", "")}
                  links={links}
                  isMobile
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </React.Fragment>
    );
  }
);

export default React.memo(NavBar);
