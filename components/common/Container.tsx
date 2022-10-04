import React from "react";
import cn from "classnames";
import { BaseProps } from "../../types/global";

const Container: React.FC<BaseProps> = React.memo(({ children, className }) => {
  return (
    <div
      className={cn(
        "relative xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
});
export default Container;
