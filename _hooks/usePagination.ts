import React from "react"
import { PaginationOptions } from "swiper/types";

export function usePagination(){
    const pagination = React.useMemo<PaginationOptions>(
        () => ({
          clickable: true,
          renderBullet: function (idx, className) {
            const index = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            return `<span class=${className}>${index}</span>`;
          },
          bulletClass: "bullet",
          bulletActiveClass: "bullet-active",
          horizontalClass: "pagination",
        }),
        []
      );

      return pagination;
}