import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import Button from "./common/Button";
import { storyblokEditable } from "@storyblok/react";
import Container from "./Container";
import ProjectTeaser from "./ProjectTeaser";

interface Props {
  blok: any;
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

const FeaturedProjects: React.FC<Props> = React.memo(({ blok }) => {
  const {
    projects,
    headline,
    cta: [cta],
  } = blok;
  return (
    <Container>
      <div {...storyblokEditable(blok)} className="flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          viewport={{ once: false }}
          className={cn("w-full grid md:grid-cols-2 xl:grid-cols-3")}
        >
          {projects.map((project: any) => {
            return (
              <ProjectTeaser
                key={project.id || project.uuid}
                project={project.content}
                slug={project.full_slug}
              />
            );
          })}
        </motion.div>
        <div className="flex w-full items-center justify-center pb-8">
          {cta && (
            <Button
              className="mt-9 flex cursor-pointer items-center justify-start space-x-1 text-xs font-medium uppercase text-primary hover:text-black"
              variant="outline"
              href={cta.href}
            >
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
});
export default FeaturedProjects;
