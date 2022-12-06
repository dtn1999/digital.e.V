import React from "react";
import ProjectTeaser from "../ProjectTeaser";
import SearchBox from "../common/SearchBox";
import { useProjects } from "src/hooks/useProjects";

interface Props {
  setLoading: (loading: boolean) => void;
}

const ProjectsList: React.FC<Props> = React.memo(({ setLoading }) => {
  const [search, setSearch] = React.useState<string>("");
  const { projects, loading } = useProjects(search);
  const handleSearchClick = React.useCallback(async (inputValue: string) => {
    setSearch(inputValue);
  }, []);

  React.useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);

  return (
    <div className="w-full">
      <div className="px-4">
        <SearchBox
          handleSearchClick={handleSearchClick}
          className="mt-10 py-4"
          placeholder="Search for projects based on name, category, collaborator, description etc."
        />
      </div>
      <div className="grid w-full grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectTeaser
            key={project.id || project.uuid}
            project={project.content}
            slug={project.full_slug}
          />
        ))}
      </div>
    </div>
  );
});
export default ProjectsList;
