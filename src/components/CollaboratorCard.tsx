import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import RichtextRenderer from "./common/RichtextRenderer";

interface Props {
  collaborator: any;
  slug: string;
  withNavigation?: boolean;
}

const CollaboratorCard: React.FC<Props> = React.memo(
  ({ collaborator, slug, withNavigation }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-5 grid items-start gap-20 bg-secondary p-10 md:grid-cols-3"
      >
        <div className="flex h-full w-full items-start">
          <div className="relative h-[100px] w-[200px] overflow-hidden md:h-[300px] md:w-[400px]">
            <Image
              src={collaborator?.logo?.filename}
              alt={collaborator?.logo?.fileName}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="my-4 font-bold md:text-3xl">{collaborator?.name}</h3>
          <div className="whitespace-pre-wrap py-4 text-left font-light md:text-justify">
            <RichtextRenderer content={collaborator?.description} />
          </div>
          {withNavigation && (
            <div className="my-5 flex w-full justify-end">
              <Link href={slug}>
                <a className="flex cursor-pointer items-center space-x-1 text-sm font-medium uppercase text-primary hover:text-black">
                  <span>see contribution</span>
                  <BsChevronRight />
                </a>
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);
export default CollaboratorCard;
