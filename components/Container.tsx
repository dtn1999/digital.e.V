import React from "react";
import cn from "classnames";
import { BaseProps, BaseStoryBlockProps } from "../types/global";
const Container: React.FC<BaseProps> = React.memo(({ children }) => {
  return <div className={cn("max-w-7xl mx-auto")}>{children}</div>;
});
export default Container;
