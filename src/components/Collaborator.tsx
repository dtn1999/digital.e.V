import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import CollaboratorCard from "./CollaboratorCard";
import Container from "./Container";
import FeaturedProjects from "./FeaturedProjects";
import { motion } from "framer-motion";
import ProjectTeaser from "./ProjectTeaser";
import Headline from "./Headline";
interface Props {
  blok: any;
}
const Collaborator: React.FC<Props> = React.memo(({ blok }) => {
  const { projects = [] } = blok;
  return (
    <Container>
      <div {...storyblokEditable(blok)} className="mt-[130px]">
        <CollaboratorCard collaborator={blok} slug={blok.full_slug} />
        <div className="my-10 flex items-center justify-center">
          <Headline
            headlineClassName="items-center bg-primary text-accent justify-center px-4 py-8"
            blok={{
              value: `We have ${
                projects.length > 0 ? "" : "[not"
              } worked with ${blok.name} ${
                projects.length > 0 ? "" : "[on [any [project yet]"
              } ${projects.length > 0 ? "on the following projects" : ""}`,
              color: "black",
            }}
          />
        </div>
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
      </div>
    </Container>
  );
});
export default Collaborator;

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
