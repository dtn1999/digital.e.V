import React from "react";
import cn from "classnames";
interface Props {
  blok: any;
}
const FormSelectOption: React.FC<Props> = React.memo(({ blok }) => {
  const { label, value } = blok;
  return <option value={value}>{label}</option>;
});
export default FormSelectOption;
