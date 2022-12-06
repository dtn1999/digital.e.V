import React from "react";
import cn from "classnames";
import { MultiColumnFragment } from "@app/types/graphql";
import { StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: any;
}

export const Column: React.FC<Props> = React.memo(({ blok }) => {
  const { title, titleOnBottom, body } = blok;
  return (
    <div
      className={cn({
        "md-4 lg:mb-8 flex justify-start text-black": true,
        "flex-col ": !titleOnBottom,
        "flex-col-reverse": titleOnBottom,
      })}
    >
      <span className="mt-4 mb-3 text-base font-bold uppercase">{title}</span>
      <div>
        {body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
});

interface GridProps {
  blok: any;
}
const Grid: React.FC<GridProps> = React.memo(({ blok }) => (
  <div className={cn("w-full grid sm:grid-cols-1 gap-8 md:grid-cols-2")}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
));

export default Grid;
