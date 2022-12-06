import React from "react";
import cn from "classnames";
import useSWR from "swr";
import { gql } from "graphql-request";
import SearchBox from "./common/SearchBox";
import EventTeaser from "./EventTeaser";
import Dropdown, { DisplayStyle } from "./common/Dropdown";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import CalendarEventContent from "./CalendarEventContent";
import { useEvents } from "src/hooks/useEvents";
import Container from "./Container";

interface Props {
  setLoading: (loading: boolean) => void;
}

const EventsList: React.FC<Props> = React.memo(({ setLoading }) => {
  const [search, setSearch] = React.useState<string>("");
  const { events, loading, initialDate } = useEvents(search);
  const handleSearchClick = React.useCallback(async (inputValue: string) => {
    setSearch(inputValue);
  }, []);

  React.useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);

  const [selectedView, setSelectedView] = React.useState<DisplayStyle>("list");

  const handleDropdownChange = React.useCallback((value: DisplayStyle) => {
    setSelectedView(value);
  }, []);

  return (
    <div className="w-full">
      <Container>
        <div className="flex w-full flex-col items-center space-x-10 px-4 pt-4 md:flex-row">
          <Dropdown
            handleClick={handleDropdownChange}
            className="w-full md:w-auto"
          />
          <SearchBox handleSearchClick={handleSearchClick} />
        </div>
        {selectedView === "list" ? (
          <div className="grid w-full grid-cols-1 py-20 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <EventTeaser
                key={event.id || event.uuid}
                event={event.content}
                slug={event.slug}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="relative mt-20 mb-32 h-screen w-full px-3 font-light md:px-0">
            <FullCalendar
              dayHeaderClassNames={(args) => {
                return "border-b-0 text-left self-start";
              }}
              lazyFetching
              initialDate={initialDate}
              height="100%"
              initialView="listMonth"
              plugins={[
                timeGridPlugin,
                interactionPlugin,
                dayGridPlugin,
                listPlugin,
              ]}
              events={events.map(({ content: event, slug }: any) => ({
                ...event,
                start: event.start,
                end: event.end,
                title: event.name,
                color: event.color?.hex,
                description: event.teaser,
                slug,
              }))}
              eventContent={(event) => <CalendarEventContent {...event} />}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,listMonth",
                start: "listMonth",
              }}
            />
          </div>
        )}
      </Container>
    </div>
  );
});
export default EventsList;
