import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard: React.FC<any["projects"][number]> = React.memo(
  ({ id, name, image, description, slug }) => {
    const index = Math.round(Math.random() * 4) % 4;

    return (
      <Link href={`/projects/${slug}`}>
        <div className="px-4">
          <div
            key={id}
            className="group relative mb-8 grid w-full cursor-pointer bg-secondary"
          >
            <div className="relative h-[400px] w-full">
              <Image
                alt={name}
                src={image.url}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-700 "
              />
            </div>
            <div className="relative flex flex-col bg-secondary px-9 py-5">
              <span className="text-2xl font-medium">{name}</span>
              <span className="my-4 text-primary">September 15, 2017</span>
              <p className="my-4 h-[120px] overflow-hidden text-ellipsis text-sm font-extralight leading-6 tracking-wider text-black">
                {description.text}
              </p>
              ...
            </div>
            {index === 0 && (
              <div className="absolute top-3 left-3 flex h-11 items-center justify-center rounded-full border border-primary bg-primary px-5 text-white">
                sponsored
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }
);
export default ProjectCard;
