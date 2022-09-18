import React from "react";
import dynamic from "next/dynamic";
import cn from "classnames";
import Headline from "../Blocks/Headline";
import Container from "../common/Container";

const SectionWithImage = dynamic(() => import("./SectionWithImage"));
const ProjectSection = dynamic(() => import("./ProjectSection"));
const CollaboratorSection = dynamic(() => import("./CollaboratorSection"));
const MemberSection = dynamic(() => import("./TeamSection"));
const TestimonialSection = dynamic(() => import("./TestimonialSection"));
const ServiceSection = dynamic(() => import("./ServiceSection"));

const SectionSwitcher: React.FC<any> = React.memo(
  ({ typename, __typename, ...data }) => {
    //@ts-ignore
    const { id } = data;
    console.log("section", data);
    switch (typename) {
      case "SectionWithImage":
        return <SectionWithImage {...(data as any)} />;
      case "SectionCurrentProject":
        return <ProjectSection {...(data as any)} />;
      case "SectionAdministrativeTeam":
        return <MemberSection {...(data as any)} />;
      case "SectionCollaborator":
        return <CollaboratorSection {...(data as any)} />;
      case "SectionTestimonial":
        return <TestimonialSection {...(data as any)} />;
      case "SectionService":
        return <ServiceSection {...(data as any)} />;
      default:
        return <React.Fragment></React.Fragment>;
    }
  }
);

const SectionsManager: React.FC<any> = React.memo(({ sections }) => {
  const sectionsComponents = React.useMemo(() => {
    const res = sections.map((section: any) => (
      <div
        key={section.id}
        className={cn("py-10", {
          "bg-white": section.backgroundColor === "WHITE",
          "bg-secondary": section.backgroundColor === "SECONDARY",
        })}
      >
        {section.headline && (
          <div className="mb-11 mt-5 flex justify-center">
            <Headline
              value={section.headline.text}
              underline
              underlineAlign="center"
            />
          </div>
        )}
        <Container>
          <SectionSwitcher {...section.type} />
        </Container>
      </div>
    ));
    return res;
  }, [sections]);
  console.log("section components", sections);
  return <React.Fragment>{sectionsComponents}</React.Fragment>;
});
export default SectionsManager;
