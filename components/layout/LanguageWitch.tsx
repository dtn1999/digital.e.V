import React from "react";
import cn from "classnames";
interface Props {}

const LanguageSwitch: React.FC<Props> = React.memo(({}) => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [lang, setLang] = React.useState<"DE" | "EN">("DE");

  return (
    <div
      className="relative flex h-[46px] w-[110px] -rotate-90 cursor-pointer items-center overflow-hidden rounded-full border-2 border-transparent bg-white p-2 text-[#353535]
      shadow-[0px_0px_5px_0px_rgba(0,0,0,0.19)]"
      onClick={() => {
        setLang((prev) => (prev === "DE" ? "EN" : "DE"));
        setToggle(!toggle);
      }}
    >
      <div className="flex h-full w-full items-center justify-between px-1 text-[14px] font-bold">
        <span>DE</span>
        <span>EN</span>
      </div>
      <div
        className={cn({
          "flex justify-center items-center left-0 top-0 bottom-0 w-[60px] absolute rounded-full transform duration-300 text-[14px font-bold ease-in-out bg-primary text-white":
            true,
          "transform translate-x-[43px]": toggle,
        })}
      >
        <span>{lang}</span>
      </div>
    </div>
  );
});
export default LanguageSwitch;
