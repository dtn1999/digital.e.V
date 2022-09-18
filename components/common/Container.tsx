import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

const Container: React.FC<Omit<BaseProps, "className">> = React.memo(
  ({ children }) => {
    return (
      <div
        className={cn(
          "relative xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto"
        )}
      >
        {children}
      </div>
    );
  }
);
export default Container;
