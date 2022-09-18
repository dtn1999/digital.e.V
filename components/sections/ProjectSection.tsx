import React from "react";
import cn from "classnames";
import {
  ButtonVariant,
  SectionCurrentProject,
  SectionCurrentProjectFragment,
} from "@app/types/graphql";
import Image from "next/image";
import Button from "@app/components/common/Button/Button";
import { motion } from "framer-motion";
import Link from "next/link";
interface Props {
  projects: SectionCurrentProjectFragment["projects"];
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

const ProjectSection: React.FC<Props> = React.memo(({ projects }) => {
  return (
    <React.Fragment>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        viewport={{ once: false }}
        className={cn("w-full grid md:grid-cols-2 xl:grid-cols-3")}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex h-full w-full items-center justify-center"
          >
            <Link href={`/projects/${project.slug}`}>
              <motion.div
                key={project.id}
                variants={fadeInOut}
                viewport={{ once: false }}
                className={cn(
                  "group relative mb-8 w-full  lg:w-[400px] xl:w-[380px] cursor-pointer px-4",
                  {
                    "h-[240px]": index % 2 === 1 || index <= 2,
                    "h-[360px]": index % 2 === 0 && index > 2,
                  }
                )}
              >
                <Image
                  src={project.image.url}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <h3 className="text-center text-lg font-bold capitalize text-white transition-all duration-700 after:mx-auto  after:mt-2 after:block after:h-1 after:w-8 after:bg-white group-hover:opacity-100 lg:opacity-0">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </motion.div>
      <div className="flex w-full items-center justify-center pb-8">
        <Link href="/projects">
          <Button variant={ButtonVariant.Outline}>see all</Button>
        </Link>
      </div>
    </React.Fragment>
  );
});
export default ProjectSection;
