import React from "react";
import cn from "classnames";
interface Props {}
const CloseIcon: React.FC<Props> = React.memo(({}) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      aria-hidden="true"
      className="sc-bdnylx eoHNwX"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.64645 2.64645C2.84171 2.45118 3.15829 2.45118 3.35355 2.64645L8 7.29289L12.6464 2.64645C12.8417 2.45118 13.1583 2.45118 13.3536 2.64645C13.5488 2.84171 13.5488 3.15829 13.3536 3.35355L8.70711 8L13.3536 12.6464C13.5488 12.8417 13.5488 13.1583 13.3536 13.3536C13.1583 13.5488 12.8417 13.5488 12.6464 13.3536L8 8.70711L3.35355 13.3536C3.15829 13.5488 2.84171 13.5488 2.64645 13.3536C2.45118 13.1583 2.45118 12.8417 2.64645 12.6464L7.29289 8L2.64645 3.35355C2.45118 3.15829 2.45118 2.84171 2.64645 2.64645Z"
        fill="currentColor"
      ></path>
    </svg>
  );
});
export default CloseIcon;
