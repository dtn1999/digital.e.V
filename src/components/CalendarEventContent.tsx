import { DateRange, EventContentArg } from "@fullcalendar/common";
import React from "react";
import ReactDOM from "react-dom";
import { usePopperTooltip } from "react-popper-tooltip";
import moment from "moment";
import Link from "next/link";

const CalendarEventContent: React.FC<EventContentArg> = React.memo(
  ({ event, ...rest }) => {
    const { type } = rest.view;
    const {
      title: eventTitle,
      extendedProps: { description, image, slug },
    } = event._def;
    const { start, end } = event._instance?.range as DateRange;
    const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
      usePopperTooltip({
        placement: "bottom-start",
        delayHide: 300,
        offset: [2, 2],
      });

    const [isMouseOnTooltip, setIsMouseOnTooltip] = React.useState(false);

    if (!eventTitle) {
      return null;
    }

    return (
      <React.Fragment>
        <div
          ref={setTriggerRef}
          className="group relative h-full w-full cursor-pointer border-0 border-transparent bg-primary px-4 pb-4 text-gray-100"
        >
          <span className="text-sm font-light">
            {moment(start).format("hh:mm")} - {moment(end).format("hh:mm")}
          </span>
          <span className="flex w-full cursor-pointer whitespace-normal text-xs  font-normal group-hover:underline">
            {eventTitle}
          </span>
          {(visible || isMouseOnTooltip) &&
            ReactDOM.createPortal(
              <Link href={slug}>
                <div
                  onMouseEnter={() => setIsMouseOnTooltip(true)}
                  onMouseLeave={() => setIsMouseOnTooltip(false)}
                  ref={setTooltipRef}
                  {...getTooltipProps({
                    className:
                      "absolute z-[1000] overflow-hidden bg-white xl:text-xs text-[8px] cursor-pointer",
                  })}
                >
                  <div className="flex w-[340px] flex-col border px-4 py-5 shadow-lg">
                    <p className="mb-3 font-light">
                      <span>{`${moment(start).format("MMM d")} @ ${moment(
                        start
                      ).format("hh:mm")} - ${moment(end).format(
                        "hh:mm"
                      )}`}</span>
                    </p>
                    <h3 className="mb-5 font-bold">{eventTitle}</h3>
                    <p className="max-h-[180px] overflow-hidden whitespace-pre-wrap font-light">
                      {description}
                    </p>
                  </div>
                </div>
              </Link>,
              //@ts-ignore
              document.querySelector("#destination")
            )}
        </div>
      </React.Fragment>
    );
  }
);

export default CalendarEventContent;
