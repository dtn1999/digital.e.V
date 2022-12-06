import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { extractSpacingProps } from "@app/utils/layout";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

interface Props extends BaseProps {
  blok?: any;
}

export const BlokContainer: React.FC<Props> = React.memo(
  ({ blok, children }) => {
    const spacingProps = extractSpacingProps(blok);
    const { backgroundColor, horizontalAlignment } = blok;
    return (
      <div
        {...storyblokEditable(blok)}
        style={{ ...spacingProps }}
        className={cn(
          "w-full flex flex-col px-2 md:px-0",
          {
            "relative xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto":
              blok.default,
            "items-start":
              horizontalAlignment || horizontalAlignment === "left",
            "items-end": horizontalAlignment === "right",
            "items-center": horizontalAlignment === "center",
          },
          {
            "bg-white": backgroundColor === "white",
            "bg-secondary": backgroundColor === "secondary",
            "bg-primary": backgroundColor === "primary",
            "bg-primary-dark": backgroundColor === "primary-dark",
            "bg-primary-light": backgroundColor === "primary-light",
          }
        )}
      >
        {blok.body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    )
  }
);

const Container: React.FC<Props> = React.memo(({ children, className }) => {
  return (
    <div
      className={cn(
        "relative xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
});
export default Container;
