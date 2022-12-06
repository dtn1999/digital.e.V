import React from "react";
import SpinnerComponent from "./common/Spinner";
import Container from "./Container";
import EventsList from "./EventsList";

const AllEvents: React.FC = React.memo(({}) => {
  // states
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      {loading ? (
        <div className="col-span-2 flex h-full w-full items-center justify-center">
          <SpinnerComponent />
        </div>
      ) : (
        <EventsList setLoading={setLoading} />
      )}
    </React.Fragment>
  );
});

export default AllEvents;
