import React from "react";
import cn from "classnames";
import Image from "next/image";
import { BaseBlokProps } from "../../types/global";
import Container from "../common/Container";
import Headline from "../Blocks/Headline";

const TeamSection: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  const { team = [], headline } = blok;
  return (
    <Container>
      <div className="w-full h-full flex flex-col items-center">
        {headline && (
          <Headline value={headline} underline underlineAlign="center" className="mt-5 mb-10" />
        )}

        <div
          className={cn("w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-8")}
        >
          {team.map(({ id, image, position, name }: any) => (
            <div key={id} className="flex flex-col">
              <div className="relative overflow-hidden rounded-full pb-[100%]">
                <Image
                  src={image?.filename || ""}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-center text-lg font-bold">{name}</h3>
              <p className="text-center text-xs font-light">{position}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
});
export default TeamSection;
