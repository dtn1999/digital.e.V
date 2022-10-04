import React from "react";
import cn from "classnames";
import { BaseBlokProps } from "../../types/global";
import RichText from "../common/RichText";

interface Props {
  value: string;
}
const Paragraph: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  console.log("Paragraph", blok);
  const { value } = blok;
  return <RichText blok={value} />;
});
export default Paragraph;
