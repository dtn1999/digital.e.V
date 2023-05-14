import React from "react";
import cn from "classnames";
import { StoryblokComponent } from "@storyblok/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import Button from "src/components/common/Button";
import { removePrefix } from "@app/utils/navigation";
import { useClickOutside } from "src/hooks/useClickOutside";
import { useRouter } from "next/router";
import { useDialogs } from "src/hooks/useDialogs";
import { DialogWrapper } from "../Dialog";
import ContactForm from "@app/features/from/ContactForm";

interface Props {
  blok: any;
}

const MainNavigation: React.FC<Props> = ({ blok }) => {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState<boolean>(false);
  const toggleMobileNav = React.useCallback(() => {
    setIsMobileNavOpen((prev) => !prev);
  }, []);
  const closeMobileNav = React.useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  const nodeRef = useClickOutside(closeMobileNav);
  const { isOpen, openModal, closeModal } = useDialogs();

  React.useEffect(() => {
    router.events.on("routeChangeStart", closeMobileNav);
    return () => {
      router.events.off("routeChangeStart", closeMobileNav);
    };
  }, [router, closeMobileNav]);

  return (
    <React.Fragment>
      <header
        className={cn(
          "xl:pl-16 px-4 min-h-[90px] flex items-center z-[100] transition-all duration-700 bg-white max-h-[112px] fixed left-0 right-0 top-0 border-b"
        )}
      >
        <div className="flex w-full items-center justify-between">
          <div
            className={cn({
              "py-3 px-4 text-sm font-black uppercase md:px-4 md:text-2xl cursor-pointer":
                true,
            })}
          >
            <Link href="/">
              <a>
                <Image
                  src={blok.logo.filename}
                  width={250}
                  height={80}
                  priority
                  className="width-auto height-auto cursor-pointer"
                  alt="logo VKII"
                />
              </a>
            </Link>
          </div>
          <NavButtonMenu
            isMobileNavOpen={isMobileNavOpen}
            handleClick={toggleMobileNav}
          />
        </div>
        <div className="hidden items-center px-4 py-3 lg:flex">
          <nav className="flex w-full items-center">
            <ul className="flex xl:mr-11 ">
              {blok.links?.map((nestedBlok: any) => (
                <li
                  key={nestedBlok._uid}
                  className={cn({
                    "relative py-7 px-3": true,
                  })}
                >
                  <StoryblokComponent
                    className=""
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                  />
                </li>
              ))}
            </ul>
            <Button
              key={blok.cta[0].id}
              variant="solid"
              onClick={openModal}
              className="hidden text-sm font-medium lg:flex lg:text-xs"
            >
              <span>{blok.cta[0].label}</span>
            </Button>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            className={cn({
              "absolute left-0 right-0 h-full overflow-hidden z-[100] bg-black/70":
                true,
              isMobileNavOpen,
              hidden: !isMobileNavOpen,
            })}
          >
            <div className="absolute z-[300] flex h-[120px] w-full items-center justify-end bg-transparent px-4">
              <NavButtonMenu
                isMobileNavOpen={isMobileNavOpen}
                handleClick={closeMobileNav}
              />
            </div>
            <motion.div
              // variants={fadeInRight}
              ref={nodeRef}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="fixed inset-y-0 right-0 z-[200] w-[80%] bg-white pt-[120px] md:w-[40%] smd:w-1/2"
            >
              <nav className="h-full w-full">
                <ul className="flex flex-col items-start px-8 pt-2">
                  {blok.links?.map((nestedBlok: any) => (
                    <div className="my-2" key={nestedBlok._uid}>
                      <StoryblokComponent
                        className=""
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                      />
                    </div>
                  ))}
                  <Button
                    key={blok.cta[0].id}
                    variant="solid"
                    onClick={openModal}
                    className="my-4 w-full text-sm font-medium lg:flex lg:text-xs"
                  >
                    <span>{blok.cta[0].label}</span>
                  </Button>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <DialogWrapper isOpen={isOpen} closeModal={closeModal}>
        <ContactForm />
      </DialogWrapper>
    </React.Fragment>
  );
};

interface NavButtonMenuProps {
  handleClick: () => void;
  isMobileNavOpen: boolean;
  className?: string;
}

const NavButtonMenu: React.FC<NavButtonMenuProps> = React.memo(
  ({ handleClick, isMobileNavOpen, className }) => {
    return (
      <div
        onClick={handleClick}
        className={cn("py-3 px-4 text-xl lg:hidden", className)}
      >
        {isMobileNavOpen ? (
          <div className="text-black">
            <AiOutlineClose />
          </div>
        ) : (
          <div className="">
            <AiOutlineMenu className="" />
          </div>
        )}
      </div>
    );
  }
);
export default MainNavigation;
