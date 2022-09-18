import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

function parseHeadlineWord(word: string, index: number) {
  const wordsComponents = word.split(" ").map((item, indexWord) => {
    if (item.startsWith("{") || item.endsWith("}")) {
      return (
        <span key={indexWord} className="mr-2 text-primary">
          {item.replace("{", "").replace("}", "")}
        </span>
      );
    } else if (item.startsWith("[") || item.endsWith("]")) {
      return (
        <span key={indexWord} className="mr-2 text-accent">
          {item.replace("[", " ").replace("]", "")}
        </span>
      );
    }
    return (
      <span key={indexWord} className="mr-2">
        {item}
      </span>
    );
  });
  return (
    <React.Fragment key={index}>
      {wordsComponents}
      <br />
    </React.Fragment>
  );
}

function parseHeadline(headline: string) {
  const words = headline.split("\\n").filter((part) => part.trim()) || [];
  return words.map(parseHeadlineWord);
}

interface Props extends BaseProps {
  value: string;
  underline?: boolean;
  underlineAlign?: "left" | "center" | "right";
}

const Headline: React.FC<Props> = React.memo(
  ({ value, underline, underlineAlign, className }) => {
    return (
      <h1
        className={cn({
          "text-3xl font-black md:text-5xl md:leading-11": true,
          "after:block after:w-5 after:h-[1px] after:mt-4 after:content-[' '] after:bg-accent":
            underline,
          "after:mx-auto": underlineAlign === "center",
          "after:mt-8": underlineAlign && underlineAlign === "left",
          "after:ml-auto": underlineAlign === "right",
          [className || ""]: className,
        })}
      >
        {parseHeadline(value)}
      </h1>
    );
  }
);
export default Headline;
