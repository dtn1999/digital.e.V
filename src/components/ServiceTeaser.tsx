import React from "react";
import ReactIconsLoader from "./common/ReactIconsLoader";
import Link from "next/link";
import RichtextRenderer from "./common/RichtextRenderer";
import { BaseProps } from "@app/types";
import cn from "classnames";

interface Props extends BaseProps {
  service: any;
  slug: string;
  withDescription?: boolean;
  iconClassName?: string;
}
const ServiceTeaser: React.FC<Props> = React.memo(
  ({ service, slug, withDescription, className, iconClassName }) => {
    return (
      <Link href={slug}>
        <div
          key={service.id}
          className={cn(
            "group mb-9 flex w-full cursor-pointer flex-col items-center border-2 border-transparent p-4 duration-700 hover:border-primary",
            className
          )}
        >
          <div className={cn("mb-5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary bg-white duration-200 group-hover:border-4", iconClassName)}>
            <ReactIconsLoader
              icon={service.icon as string}
              className="text-4xl group-hover:text-primary"
            />
          </div>
          <div className="mb-9 flex w-full flex-col items-center">
            <span className="text-center text-lg font-bold">
              {service.name}
            </span>
            {withDescription ? (
              <div className="mt-4 text-justify font-light">
                <RichtextRenderer content={service.description} />
              </div>
            ) : (
              <div className="mt-4 text-justify font-light">
                {service.teaser}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }
);
export default ServiceTeaser;
