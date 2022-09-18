import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import Column from "./Column";

interface Props extends BaseProps {
  columns: any[];
  numberOfColumnsOnDesktop: number;
  numberOfColumnsOnMobile: number;
}

const MultiColumn: React.FC<Props> = React.memo(({ children, ...props }) => {
  const {
    columns = [],
  } = props;

  return (
    <div className={cn("w-full grid sm:grid-cols-1 gap-8 md:grid-cols-2")}>
      {columns.map((column, index) => (
        <Column key={index} {...column} />
      ))}
    </div>
  );
});
export default MultiColumn;
