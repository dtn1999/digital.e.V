import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import Container from "./Container";
import { motion } from "framer-motion";
import ProjectTeaser from "./ProjectTeaser";
import ServiceTeaser from "./ServiceTeaser";
import Headline from "./Headline";
interface Props {
  blok: any;
}
const Service: React.FC<Props> = React.memo(({ blok }) => {
  const { projects = [] } = blok;
  return (
    <Container>
      <div {...storyblokEditable(blok)} className="mt-[130px] w-full">
        <ServiceTeaser
          withDescription
          service={blok}
          slug={blok.full_slug || ""}
          className="border-primary"
          iconClassName="border-4 text-primary"
        />
        {projects.length > 0 && (
          <React.Fragment>
            <div className="my-10 flex justify-center">
              <Headline
                headlineClassName="items-center bg-primary text-accent justify-center p-4"
                blok={{
                  value:
                    "Some Project Projects which benefited from this service",
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
          </React.Fragment>
        )}
      </div>
    </Container>
  );
});
export default Service;

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
