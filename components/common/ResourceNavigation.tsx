import React from "react";
import cn from "classnames";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  prevResourceSlug: string | undefined;
  nextResourceSlug: string | undefined;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  prevButtonLabel: string;
  nextButtonLabel: string;
}

const ResourceNavigation: React.FC<Props> = React.memo(
  ({
    prevResourceSlug,
    nextResourceSlug,
    handleNextClick,
    handlePrevClick,
    prevButtonLabel,
    nextButtonLabel,
  }) => {
    return (
      <div className="flex w-full items-center justify-between">
        {!prevResourceSlug ? (
          <div></div>
        ) : (
          <button
            onClick={handlePrevClick}
            className="my-2 flex cursor-pointer items-center hover:text-primary"
          >
            <BsChevronLeft />
            <span className="ml-2 underline">{prevButtonLabel}</span>
          </button>
        )}

        {!nextResourceSlug ? (
          <div></div>
        ) : (
          <button
            onClick={handleNextClick}
            className="my-2 flex cursor-pointer items-center hover:text-primary"
          >
            <span className="mx-2 underline underline-offset-2">
              {nextButtonLabel}
            </span>
            <BsChevronRight />
          </button>
        )}
      </div>
    );
  }
);
export default ResourceNavigation;
