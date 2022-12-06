import React from "react";
import SpinnerComponent from "src/components/common/Spinner";
import ProjectsList from "./meta/ProjectsList";
import Container from "./Container";

const AllProjects: React.FC = React.memo(({}) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <Container>
      {loading ? (
        <div className="col-span-2 flex h-full w-full items-center justify-center">
          <SpinnerComponent />
        </div>
      ) : (
        <ProjectsList setLoading={setLoading} />
      )}
    </Container>
  );
});

export default AllProjects;
