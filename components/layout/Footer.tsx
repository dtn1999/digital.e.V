import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonVariant } from "@app/types/graphql";
import Container from "../common/Container";
import Button from "../common/Button";
import Headline from "../Blocks/Headline";
import ReactIconsLoader from "../common/ReactIconsLoader";
interface Props {}
const Footer: React.FC<Props> = React.memo(({}) => {
  return (
    <footer className="relative w-full bg-secondary">
      <Container>
        <div className="grid grid-cols-1 gap-8 pt-5 pb-10 md:-mx-4 md:grid-cols-3">
          <div className="w-full px-4">
            <div className="mt-4 flex flex-col font-bold">
              <div className="relative h-[100px] w-[300px]">
                <Image src="/images/logo.png" alt="logo" layout="fill" />
              </div>
            </div>
            <p className="mt-4">
              The world without photography will be meaningless to us if there
              is no light and color, which opens up our minds and expresses
              passion.
            </p>
            <Link href="/become-member">
              <Button variant={ButtonVariant.Solid} className="mt-5 w-full">
                Become Member
              </Button>
            </Link>
          </div>
          <div className="flex w-full flex-col px-4 md:ml-10">
            <Headline
              underline
              underlineAlign="left"
              value="Links"
              className="text-4xl"
            />
            <div className="mt-4 flex flex-col">
              <Link href="/impressum">
                <a className="mb-4 font-medium capitalize underline">
                  Impressum
                </a>
              </Link>
              <Link href="/data-privacy">
                <a className="mb-4 font-medium capitalize underline">
                  Datenschutz
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full px-4">
            <Headline
              underline
              underlineAlign="left"
              value="Contact"
              className="text-4xl"
            />
            <div className="mt-4">
              <div className="mt-4 flex space-x-3">
                <span className="capitalize">phone:</span>
                <span>+1 (800) 456 37 11</span>
              </div>
              <div className="mt-4 flex space-x-3">
                <span className="capitalize">email:</span>
                <span>support@promo-theme.com</span>
              </div>
              <div className="mt-6">
                Copyright © 2022 vkii ruhrbezirk. All Rights Reserved.
              </div>
            </div>
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
});
export default Footer;
