import React from "react";
import cn from "classnames";
import Image from "next/image";
import Container from "../common/Container";
import Headline from "../Blocks/Headline";
interface Props {}
const GridSection: React.FC<Props> = React.memo(({}) => {
  return (
    <div className={cn("bg-[#EAF1FD] w-full py-5")}>
      <Container>
        <div className="flex flex-col items-center">
          <Headline value="Latest News & Events" />
          <div className="grid grid-cols-1 md:grid-cols-3 my-5">
            <div className="flex flex-col relative w-[380px] h-[600px] group">
              <Image src="/images/image.jpeg" alt="image" layout="fill" />
              <div className="hidden bg-primary/80 text-white px-4 pt-4 pb-10 absolute inset-0 bottom-0 group-hover:flex items-center cursor-pointer transition-all duration-700">
                <div>
                  <span className="text-accent">5. October 2021</span>
                  <h1 className="text-3xl font-bold capitalize">
                    encounter with africa
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});
export default GridSection;
