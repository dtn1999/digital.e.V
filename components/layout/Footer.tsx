import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import Headline from "../Blocks/Headline";
import ReactIconsLoader from "../common/ReactIconsLoader";
import ContactDialog from "../common/Dialog";
import { BsArrowRight } from "react-icons/bs";
interface Props {}

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
                <BsArrowRight className="text-xl group-hover:translate-x-5 transition-all duration-700" />
              </span>
              <span className="first-letter:uppercase mx-5 group-hover:translate-x-2 transition-all duration-700">
                E-Mail us
              </span>
            </button>
            <ContactDialog isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </Container>
    </footer>
  );
});
export default Footer;
