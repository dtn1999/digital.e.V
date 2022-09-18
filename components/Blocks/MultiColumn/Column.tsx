import React from "react";
import cn from "classnames";
import BlockManager from "../BlockManager";

interface Props {
  title: string;
  titleOnBottom?: boolean;
  blocks: any[];
}

const Column: React.FC<Props> = React.memo(
  ({ title, titleOnBottom, blocks }) => {
    return (
      <div
        className={cn({
          "md-4 lg:mb-8 flex justify-start": true,
          "flex-col ": !titleOnBottom,
          "flex-col-reverse": titleOnBottom,
        })}
      >
        <span className="mt-4 mb-3 text-base font-bold uppercase">{title}</span>
        <BlockManager blocks={blocks} />
      </div>
    );
  }
);
export default Column;
