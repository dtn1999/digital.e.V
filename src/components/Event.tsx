import React from "react";
import cn from "classnames";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitterSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import Container from "./Container";
import Headline from "./Headline";
import Image from "next/image";
import { BaseProps } from "@app/types";
import { getDateTimeInterval } from "@app/utils/datetime";
import Button from "./common/Button";
import RichtextRenderer from "./common/RichtextRenderer";

interface Props {
  blok: any;
}

interface SectionTitleProps extends BaseProps {
  title: string;
}
const SectionTitle: React.FC<SectionTitleProps> = React.memo(
  ({ title, className }) => (
    <div className={cn("mb-5 bg-secondary px-4", className)}>
      <h1 className="py-3 text-2xl capitalize">{title}</h1>
    </div>
  )
);

const Event: React.FC<Props> = React.memo(({ blok }) => {
  const {
    name,
    startDate,
    endDate,
    teaser,
    color,
    featuredImage,
    description,
    organizer,
    place,
  } = blok;
  const { dateInterval, dayInterval, timeInterval } = React.useMemo(
    () => getDateTimeInterval(startDate, endDate),
    [startDate, endDate]
  );
  return (
    <Container>
      <div className="mt-[140px] grid h-full w-full grid-cols-1 pb-20 md:grid-cols-3">
        <div className="col-span-2 px-4">
          <div className="relative mt-8 px-4 pb-8 md:px-0">
            <Headline
              className="text-black"
              blok={{
                underline: true,
                underlineAlign: "left",
                value: name,
                color: "black",
              }}
            />
            <div
              style={{
                writingMode: "vertical-lr",
              }}
              className="absolute top-0 -left-4 flex w-8 items-center bg-[#F2F2F2] py-2 md:-left-8"
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
          <span className="mb-8 inline-block text-lg font-bold text-primary">
            {dateInterval}
          </span>
          <div className="relative h-[500px] w-full">
            <Image
              src={featuredImage?.filename || ""}
              layout="fill"
              objectFit="cover"
              alt={name || ""}
            />
          </div>
          <div className="my-5">
            <RichtextRenderer content={description} />
          </div>
          <div className="flex w-full justify-end border-t border-t-black py-5"></div>
          <div className="my-4"></div>
        </div>
        <div className="flex w-full items-start">
          <div className="mx-4 mb-5 w-full border border-[#eeeeee] md:mx-10">
            <SectionTitle title="Details" />
            <div className="space-y-5 px-4">
              <div className="flex flex-col">
                <span className="mb-2 font-semibold">Date:</span>
                <span className="underline decoration-double">
                  {dayInterval}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="mb-2 font-semibold">Time:</span>
                <span>{timeInterval}</span>
              </div>
              <div className="flex flex-col">
                <span className="mb-2 font-semibold">Category:</span>
                <span className="text-primary">Digitalization</span>
              </div>
            </div>
            <SectionTitle title="Organizer" className="mt-5" />
            <div className="px-4">
              <span>{organizer}</span>
            </div>
            <SectionTitle title="Place" className="mt-5" />
            <div className="px-4">
              <p className="py-4">{place}</p>
            </div>
            <div className="mb-5 px-4">
              <Button
                href={{
                  cached_url: "/pages/events",
                }}
                variant="outline"
              >
                See all Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});
export default Event;
