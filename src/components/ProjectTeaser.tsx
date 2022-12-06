import React from "react";
import Link from "next/link";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { getDateInterval } from "@app/utils/datetime";
import cn from "classnames";

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

interface Props {
  project: any;
  id?: string;
  slug: string;
}

const ProjectTeaser: React.FC<Props> = React.memo(({ project, id, slug }) => {
  if (!project) return null;
  const {
    name,
    featuredImage: image,
    teaser,
    startDate,
    endDate,
    status,
  } = project;
  const dateInterval = getDateInterval(startDate, endDate);
  return (
    <Link href={`${slug}`}>
      <div {...storyblokEditable(project)} className="px-4">
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
            <span className="text-xl font-medium md:text-2xl">{name}</span>
            <span
              className={cn("my-4 font-bold uppercase", {
                "text-primary": status === "running",
                "text-error": status === "terminated",
              })}
            >
              {status}
            </span>
            <p className="my-4 h-[120px] overflow-hidden text-ellipsis text-sm font-extralight leading-6 tracking-wider text-black">
              {teaser}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
});
export default ProjectTeaser;
