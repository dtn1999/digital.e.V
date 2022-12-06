import React from "react";
import cn from "classnames";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { extractSpacingProps as extractStyleProps } from "@app/utils/layout";
import Container from "./Container";

interface Props {
  blok: any;
}

const FlexBox: React.FC<Props> = React.memo(({ blok }) => {
  const { body } = blok;
  const spacingProps = extractStyleProps(blok);
  return (
    <div
      style={{
        ...spacingProps,
      }}
      {...storyblokEditable(blok)}
      className={cn("w-full", {
        "flex flex-col": blok.flexDirection === "column",
        "flex md:flex-row flex-col": blok.flexDirection === "row",
        "justify-start": blok.justifyContent === "start",
        "justify-end": blok.justifyContent === "end",
        "justify-center": blok.justifyContent === "center",
        "justify-between": blok.justifyContent === "space-between",
        "justify-around": blok.justifyContent === "space-around",
        "items-start": blok.alignItems === "start",
        "items-end": blok.alignItems === "end",
        "items-center": blok.alignItems === "center",
        "items-stretch": blok.alignItems === "stretch",
        "flex-wrap": blok.flexWrap === "wrap",
        "flex-nowrap": blok.flexWrap === "nowrap",
        "flex-wrap-reverse": blok.flexWrap === "wrap-reverse",
      })}
    >
      {body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
});
export default FlexBox;
