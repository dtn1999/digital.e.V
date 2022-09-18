import React from "react";
import cn from "classnames";
interface Props {
  handleChecked: (checked: boolean) => void;
  defaultChecked?: boolean;
}
const FormCheckBox: React.FC<Props> = React.memo(
  ({ handleChecked, defaultChecked }) => {
    const [checked, setChecked] = React.useState(defaultChecked);
    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          handleChecked(e.target.checked);
        }}
        className="h-4 w-4 text-primary accent-primary focus:bg-primary"
      />
    );
  }
);
export default FormCheckBox;
