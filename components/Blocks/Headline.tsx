import React from "react";
import cn from "classnames";
import { BaseProps } from "../../types/global";

function parseHeadlineWord(word: string, index: number) {
  const wordsComponents = word.split(" ").map((item, indexWord) => {
    if (item.startsWith("{") || item.endsWith("}")) {
      return (
        <span
          key={indexWord}
          className={cn({
            "text-primary": true,
            "mr-2": indexWord < word.split(" ").length - 1,
          })}
        >
          {item.replace("{", "").replace("}", "")}
        </span>
      );
    } else if (item.startsWith("[") || item.endsWith("]")) {
      return (
        <span
          key={indexWord}
          className={cn({
            "text-accent": true,
            "mr-2": indexWord < word.split(" ").length - 1,
          })}
        >
          {item.replace("[", " ").replace("]", "")}
        </span>
      );
    }
    return (
      <span
        key={indexWord}
        className={cn({
          "mr-2": indexWord < word.split(" ").length - 1,
        })}
      >
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
          "relative text-3xl font-black md:text-5xl md:leading-tight": true,
          [className || ""]: className,
        })}
      >
        <span className="flex flex-wrap items-start">
          {parseHeadline(value)}
        </span>
        {underline && (
          <span
            className={cn(
              {
                "absolute inset-0 flex items-end": true,
                "justify-start": underlineAlign === "left",
                "justify-center": underlineAlign === "center",
                "justify-end": underlineAlign === "right",
              }
            )}
          >
            <hr className={cn("bottom-0 h-[2px] w-10 bg-primary")} />
          </span>
        )}
      </h1>
    );
  }
);
export default Headline;
