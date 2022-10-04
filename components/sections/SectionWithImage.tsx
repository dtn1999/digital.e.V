import React from "react";
import cn from "classnames";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import Headline from "../Blocks/Headline";
import { slideLeftRight } from "../../animations";
import BlockManager from "../Blocks/BlockManager";
import { BaseBlokProps } from "../../types/global";
import Container from "../common/Container";

const SectionWithImg: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  console.log("the blok in section with image looks like this", blok);
  const {
    image,
    imagePosition,
    backgroundColor,
    headline,
    cta: [cta],
    blocks = [],
  } = blok;
  const router = useRouter();
  const navigate = React.useCallback(
    (to: string) => {
      router.push(`/${to.replace(/^\//, "")}`);
    },
    [router]
  );
  return (
    <Container className="mt-6 mb-16">
      <section
        className={cn("relative grid w-full md:grid-cols-2 overflow-hidden", {
          "bg-secondary": backgroundColor === "SECONDARY",
          "bg-white": backgroundColor === "WHITE",
        })}
      >
        <motion.div
          variants={slideLeftRight}
          initial="imageHidden"
          whileInView="animate"
          viewport={{ once: false }}
          custom={imagePosition}
          className={cn({
            "relative flex w-full": true,
            "order-first": !imagePosition || imagePosition === "left",
            "order-last justify-end": imagePosition === "right",
          })}
        >
          <div className="relative h-80 w-full transition-transform duration-700 md:h-full lg:max-h-[800px]">
            <Image
              src={image.filename}
              alt={image.name || image.filename}
              objectFit="cover"
              layout="fill"
              className="transition-all duration-700"
            />
          </div>
        </motion.div>
        <motion.div
          variants={slideLeftRight}
          initial="panelHidden"
          whileInView="animate"
          viewport={{ once: false }}
          custom={imagePosition}
          className={cn({
            "flex flex-col justify-start w-full py-20 px-10 md:px-15": true,
          })}
        >
          {headline && <Headline value={headline} underline className="mb-5" />}
          <BlockManager blocks={blocks} />
          {cta && (
            <div className="mt-9 flex justify-start">
              <a
                onClick={() => navigate((cta.internal as any).slug)}
                className="flex cursor-pointer items-center space-x-1 text-xs font-medium uppercase text-primary hover:text-black"
              >
                <span>{cta.label}</span>
                <BsChevronRight />
              </a>
            </div>
          )}
        </motion.div>
      </section>
    </Container>
  );
});
export default SectionWithImg;
