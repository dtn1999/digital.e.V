import React from "react";
import cn from "classnames";
import Column from "./Column";

const MultiColumn: React.FC<any> = React.memo(({ children, ...props }) => {
  const {
    columns = [],
  } = props;

  return (
    <div className={cn("w-full grid sm:grid-cols-1 gap-8 md:grid-cols-2")}>
      {columns.map((column:any, index:number) => (
        <Column key={index} {...column} />
      ))}
    </div>
  );
});
export default MultiColumn;
