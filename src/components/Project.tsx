import React from "react";
import Container from "./Container";
import Headline from "./Headline";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaSnapchatSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { getDateInterval } from "@app/utils/datetime";
import RichtextRenderer from "./common/RichtextRenderer";

interface Props {
  blok: any;
  layout: any;
}

const Project: React.FC<Props> = React.memo(({ blok, layout }) => {
  const dateInterval = getDateInterval(blok.startDate, blok.endDate);
  return (
    <Container>
      <div className="mt-[120px] grid grid-cols-1 px-2 py-15 md:-mx-4 md:grid-cols-3">
        <div className="col-span-2 px-4">
          <div className="relative mt-8 px-2 pb-8 md:px-0">
            <Headline
              blok={{
                underline: true,
                underlineAlign: "left",
                value: blok?.name,
                color: "black",
              }}
            />
            <div
              style={{
                writingMode: "vertical-lr",
              }}
              className="absolute top-0 -left-6 flex w-8 items-center bg-[#F2F2F2] py-2 md:-left-8"
            >
              <div className="flex flex-row">
                <div className="my-1 cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="my-1 cursor-pointer">
                  <FaInstagramSquare />
                </div>
                <div className="my-1 cursor-pointer">
                  <FaTwitterSquare />
                </div>
                <div className="my-1 cursor-pointer">
                  <FaSnapchatSquare />
                </div>
              </div>
              <span className="my-2 block rotate-180 font-bold">share:</span>
            </div>
          </div>
          <span className="mb-8 inline-block text-xs font-bold text-primary">
            {dateInterval}
          </span>
          <div className="relative h-[500px] w-full">
            <Image
              src={blok?.featuredImage?.filename || ""}
              layout="fill"
              alt={blok?.name || ""}
              objectFit="cover"
            />
          </div>
          <div className="my-5">
            <RichtextRenderer content={blok?.description} />
          </div>
          <div className="flex w-full border-t border-t-black py-5"></div>
        </div>
      </div>
    </Container>
  );
});
export default Project;
