import React from "react";
import cn from "classnames";
import Button from "./Button";
import { BaseProps } from "@app/types";

interface Props extends BaseProps {
  handleSearchClick: (search: string) => Promise<void>;
  placeholder?: string;
}

const SearchBox: React.FC<Props> = React.memo(
  ({ handleSearchClick, placeholder = "search", className }) => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const handleSearchChange = React.useCallback(
      (value: string) => {
        setInputValue(value);
        handleSearchClick(value);
      },
      [handleSearchClick]
    );

    const handleEnterPress = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          handleSearchClick(inputValue);
        }
      },
      [inputValue, handleSearchClick]
    );
    const handleButtonClick = React.useCallback(() => {
      handleSearchClick(inputValue);
    }, [inputValue, handleSearchClick]);

    return (
      <div
        className={cn(
          "w-full flex flex-col border px-3 md:flex-row md:items-center",
          className
        )}
      >
        <input
          type="search"
          placeholder={placeholder}
          onChange={(e: any) => handleSearchChange(e.target.value)}
          value={inputValue}
          onKeyDown={handleEnterPress}
          className="my-4 w-full border border-black py-2 px-4 text-sm placeholder:font-light placeholder:text-gray-700 focus:outline-none md:border-0 md:border-transparent"
        />
        <Button
          onClick={handleButtonClick}
          type="submit"
          variant="solid"
          className="py-[14px]"
        >
          Search
        </Button>
      </div>
    );
  }
);
export default SearchBox;
