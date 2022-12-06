import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "classnames";
import Image from "next/image";
import { getDateInterval } from "@app/utils/datetime";

interface Props {
  event: any;
  index: number;
  id?: string;
  slug: string;
}
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const fadeInOut = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const EventTeaser: React.FC<Props> = React.memo(({ event, id, slug }) => {
  const { name, featuredImage: image, teaser, startDate, endDate } = event;
  const dateInterval = getDateInterval(startDate, endDate);
  return (
    <Link href={`${slug}`}>
      <div className="px-4">
        <div
          key={id}
          className="group relative mb-8 grid w-full cursor-pointer bg-secondary"
        >
          <div className="relative h-[234px] w-full">
            <Image
              alt={name}
              src={image.filename}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="object-cover object-center transition-all duration-700 "
            />
          </div>
          <div className="h-[224px]] relative flex flex-col bg-secondary px-9 py-5">
            <span className="text-2xl font-medium">{name}</span>
            <span className="my-4 text-primary">{dateInterval}</span>
            <p className="my-4 h-[120px] overflow-hidden text-ellipsis text-sm font-extralight leading-6 tracking-wider text-black">
              {teaser}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
});
export default EventTeaser;
