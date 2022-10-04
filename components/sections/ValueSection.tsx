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
import ReactIconsLoader from "../common/ReactIconsLoader";

const SectionWithImg: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  console.log("the blok in section with image looks like this", blok);
  const { image, values, headline } = blok;
  const router = useRouter();
  const navigate = React.useCallback(
    (to: string) => {
      router.push(`/${to.replace(/^\//, "")}`);
    },
    [router]
  );
  return (
    <div className="bg-[#EAF1FD] py-10 mb-5">
      <Container className="mt-6 mb-16">
        <section
          className={cn(
            "relative grid w-full md:grid-cols-2 overflow-hidden",
            {}
          )}
        >
          <motion.div
            variants={slideLeftRight}
            initial="imageHidden"
            whileInView="animate"
            viewport={{ once: false }}
            custom={"right"}
            className={cn({
              "relative flex w-full": true,
              "order-last justify-end": true,
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
            custom={"right"}
            className={cn({
              "flex flex-col justify-start w-full py-20 px-10 md:px-15": true,
            })}
          >
            {headline && (
              <Headline value={headline} underline className="mb-5" />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {values.map((value: any, index: number) => (
                <div key={`${value}:${index}`} className="flex items-center mr-3">
                  <ReactIconsLoader
                    icon={value.icon}
                    className="text-primary text-2xl"
                  />
                  <p className="text-lg ml-2">{value.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </Container>
    </div>
  );
});
export default SectionWithImg;
