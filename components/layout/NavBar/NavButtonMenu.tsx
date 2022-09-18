import React from "react";
import cn from "classnames";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
interface Props {
  handleClick: () => void;
  isMobileNavOpen: boolean;
}
const NavButtonMenu: React.FC<Props> = React.memo(
  ({ handleClick, isMobileNavOpen }) => {
    return (
      <div onClick={handleClick} className="py-3 px-4 text-xl lg:hidden">
        {isMobileNavOpen ? (
          <div className="text-black">
            <AiOutlineClose />
          </div>
        ) : (
          <div className="">
            <AiOutlineMenu className="" />
          </div>
        )}
      </div>
    );
  }
);
export default NavButtonMenu;
