import React from "react";
import { BaseBlokProps } from "../../types/global";
import Headline from "../Blocks/Headline";
import Container from "../common/Container";
import ReactIconsLoader from "../common/ReactIconsLoader";

const ServiceSection: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  console.log("the blok in service section looks like this", blok);
  const { services = [], headline } = blok;
  return (
    <Container>
      <div className="flex flex-col items-center">
        {headline && (
          <Headline value={headline} underline underlineAlign="center" />
        )}
        <div className="grid w-full grid-cols-1 md:grid-cols-3 mt-5">
          {services.map((service: any) => (
            <div
              key={service.id}
              className="mb-9 flex w-full flex-col items-center px-4"
            >
              <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary bg-white">
                <ReactIconsLoader
                  icon={service.icon as string}
                  className="text-4xl"
                />
              </div>
              <div className="mb-9 flex w-full flex-col items-center">
                <span className="text-center text-lg font-bold">
                  {service.title}
                </span>
                <p className="mt-4 text-center font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
});
export default ServiceSection;
