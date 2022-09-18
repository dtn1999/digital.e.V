import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { SocialHandle } from "@app/types/graphql";
import ReactIconsLoader from "@app/components/Icons";

interface Props extends BaseProps {
  orientation?: "horizontal" | "vertical";
  socials: SocialHandle[];
  withCustomTextColor?: boolean;
}

const SocialsHandles: React.FC<Props> = React.memo(
  ({ orientation, socials, className, withCustomTextColor }) => {
    return (
      <div
        className={cn(
          {
            "flex w-full items-center justify-center": true,
            "text-white": !withCustomTextColor,
            [className || ""]: true,
          },
          className
        )}
        style={{
          writingMode: orientation === "vertical" ? "vertical-rl" : undefined,
        }}
      >
        {socials.map((item, index) => (
          <div key={index} className=" flex items-center">
            <a
              href={item.url}
              className={cn({
                "flex cursor-pointer items-center justify-center hover:text-primary":
                  true,
                "my-4 ": orientation === "vertical",
                "mx-4": !orientation || orientation === "horizontal",
              })}
            >
              <span
                className={cn({
                  flex: true,
                  "rotate-180": orientation === "vertical",
                  "order-2": !orientation || orientation === "horizontal",
                })}
              >
                {item.label}
              </span>
              <span
                className={cn({
                  "mt-2 -rotate-90": orientation === "vertical",
                  "mr-2": !orientation || orientation === "horizontal",
                })}
              >
                <ReactIconsLoader icon={item.icon} />
              </span>
            </a>
            {index !== socials.length - 1 && (
              <span className="h-2 w-2 rounded-full bg-primary" />
            )}
          </div>
        ))}
      </div>
    );
  }
);
export default SocialsHandles;
