import React from "react";
import cn from "classnames";
import Container from "../Container";
import ReactIconsLoader from "./ReactIconsLoader";
import SocialsHandles from "./SocialsHandles";
import { StoryblokComponent } from "@storyblok/react";
interface Props {
  socials: any;
  footerLinks: any;
}
const FooterComponent: React.FC<Props> = React.memo(
  ({ socials = [], footerLinks }) => {
    const year = new Date().getFullYear();
    return (
      <footer className={cn("relative border-t text-black bg-secondary pb-10")}>
        <div className="w-full bg-[#E8E8E8]">
          <SocialsHandles
            socials={socials}
            className="flex-wrap py-[10px] text-black"
            withCustomTextColor
          />
        </div>
        <Container>
          <div className="flex flex-col items-center justify-center py-5 px-4 lg:flex-row lg:justify-between">
            <div className="flex">
              {footerLinks.map((nestedBlok: any) => (
                <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
              ))}
            </div>
            <div className="flex justify-end pb-6 pt-9 text-center">
              Copyright &#169; {year} vkii ruhrbezirk. All Rights Reserved.
            </div>
          </div>
        </Container>
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute bottom-0 right-0 mr-8 mb-4 flex h-11 w-11 cursor-pointer items-center justify-center border border-black/10"
        >
          <ReactIconsLoader
            icon="RiArrowUpLine"
            className="text-2xl text-black/50"
          />
        </div>
      </footer>
    );
  }
);

const Footer: React.FC<Props> = React.memo(({}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <footer className="relative w-full bg-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 py-14 text-white  ">
          <div className="mx-4 pr-10">
            <h1 className="text-4xl font-bold">
              You want to support us or work with us?
            </h1>
          </div>
          <div className="m-4">
            <h2 className="mb-2 text-xl font-semibold capitalize">
              Donation account
            </h2>
            <p className="my-4">
              Digitale Bildung für Alle e.V.
              <br />
              IBAN: DE18 2007 0024 0508 6053 00
              <br />
              BIC: DEUTDEDBHAM
              <br />
              Deutsche Bank
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=KSS7HDBDMQB3Q"
              target="_blank my-5"
              rel="noreferrer"
            >
              <button className="flex items-center text-2xl">
                <ReactIconsLoader icon="FaPaypal" className="text-white" />
                PayPal
              </button>
            </a>
          </div>
          <div className="m-4">
            <h2 className="text-xl font-semibold mb-2 capitalize">contact</h2>
            <div>
              Digitale Bildung für Alle e.V.
              <br />
              Kleine Hamburger Str. 15 10117 Berlin
              <br />
              info@digitalebildungfueralle.org
            </div>

            <button
              type="button"
              onClick={openModal}
              className="flex items-center text-primary bg-white px-10 py-5 text-lg font-normal rounded-[200px] group transition-all duration-700 my-5"
            >
              <span className="">
                <ReactIconsLoader
                  icon="BsArrowRight"
                  className="text-xl group-hover:translate-x-5 transition-all duration-700"
                />
              </span>
              <span className="first-letter:uppercase mx-5 group-hover:translate-x-2 transition-all duration-700">
                E-Mail us
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
});
export default Footer;
