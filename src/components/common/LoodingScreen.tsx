import React from "react";
import cn from "classnames";
interface Props {}
const LoadingScreen: React.FC<Props> = React.memo(({}) => {
  return (
    <div className={cn("absolute inset-0 flex justify-center items-center")}>
      <span className="inline-flex h-10 w-10 animate-ping rounded-full bg-primary opacity-75"></span>
    </div>
  );
});
export default LoadingScreen;