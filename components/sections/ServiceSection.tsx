import React from "react";
import { SectionServiceFragment } from "@app/types/graphql";
import ReactIconsLoader from "../common/ReactIconsLoader";

const SectionServices: React.FC<Required<SectionServiceFragment>> = React.memo(
  ({ services = [] }) => {
    return (
      <div className="grid w-full grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
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
                {service.name}
              </span>
              <p className="mt-4 text-center font-light">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
export default SectionServices;
