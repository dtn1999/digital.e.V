import React from "react";
import { PaginationOptions } from "swiper/types";

export function usePagination(paginationClassName?: string) {
  const pagination = React.useMemo<PaginationOptions>(
    () => ({
      clickable: true,
      renderBullet: function (idx, className) {
        const index = `0${idx + 1}`.slice(-2);
        return `<span class=${className}>${index}</span>`;
      },
      bulletClass: "bullet",
      bulletActiveClass: "bullet-active",
      horizontalClass: paginationClassName || "pagination",
    }),
    [paginationClassName]
  );

  return pagination;
}
