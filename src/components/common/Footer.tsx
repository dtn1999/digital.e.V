import React from "react";
import Image from "next/image";
import Container from "../Container";
import ReactIconsLoader from "./ReactIconsLoader";
import SocialsHandles from "./SocialsHandles";
import ContactForm from "@app/features/from/ContactForm";
import { DialogWrapper } from "../Dialog";
import { useDialogs } from "src/hooks/useDialogs";
interface Props {
  footerLinks: any;
  seo: any;
}

const Footer: React.FC<Props> = React.memo(
  ({ seo: { socials, ...contactDetails } }) => {
    console.log;
    const { isOpen, closeModal, openModal } = useDialogs();
    return (
      <footer className="relative w-full bg-primary">
        <div className="w-full bg-[#E8E8E8]">
          <SocialsHandles
            socials={socials}
            className="flex-wrap py-[10px] text-black"
            withCustomTextColor
          />
        </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 py-14 text-white  ">
            <div className="flex flex-col items-start mx-4 pr-10">
              <h1 className="text-4xl font-bold">
                You want to support us or work with us?
              </h1>
            </div>
            <div className="m-4">
              <h2 className="mb-2 text-xl font-semibold capitalize">
                Donation account
              </h2>
              <p className="my-4">
                Digital e.V.
                <br />
                Bank: {contactDetails.bankName}
                <br />
                IBAN: {contactDetails.bankIBAN}
                <br />
                BIC: {contactDetails.bankBIC}
              </p>
              <a
                href={contactDetails.paypalDonationLink.url}
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
                Digital e.V.
                <br />
                {contactDetails.address}
                <br />
                {contactDetails.email}
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
        <div className="w-full bg-[#E8E8E8]">
          <Container>
            {/* copyright */}
            <div className="py-3 flex w-full justify-between items-end">
              <div className="flex flex-col items-end">
                <p className="text-2xl">Gefoerdert durch</p>
                <Image
                  src="/images/sponsor-rbg.png"
                  alt="sponsor"
                  objectFit="contain"
                  width={300}
                  height={80}
                />
              </div>
              <div>
                <p>© 2023 Digitale e.V.</p>
                <div className="underline grid grid-cols-2 divide-y">
                  <a href="">impressum</a>
                  <a href="">data privacy</a>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <DialogWrapper isOpen={isOpen} closeModal={closeModal}>
          <ContactForm />
        </DialogWrapper>
      </footer>
    );
  }
);
export default Footer;
