import React from "react";
import dynamic from "next/dynamic";
import cn from "classnames";
import {
  TeamSectionFragment,
  CollaboratorSectionFragment,
  ProjectSectionFragment,
  SectionFragment,
  ServiceSectionFragment,
  TestimonialSectionFragment,
  SectionWithImageFragment,
} from "@app/types/graphql";

const SectionWithImage = dynamic(() => import("./SectionWithImage"));
const ProjectSection = dynamic(() => import("./ProjectSection"));
const CollaboratorSection = dynamic(() => import("./CollaboratorSection"));
const MemberSection = dynamic(() => import("./TeamSection"));
const TestimonialSection = dynamic(() => import("./TestimonialSection"));
const ServiceSection = dynamic(() => import("./ServiceSection"));

type SectionSwitcherProps = NonNullable<SectionFragment["type"]>;

const SectionSwitcher: React.FC<SectionSwitcherProps> = React.memo(
  ({ typename, __typename, ...data }) => {
    //@ts-ignore
    const { id } = data;
    console.log("section", data);
    switch (typename) {
      case "SectionWithImage":
        return <SectionWithImage {...(data as SectionWithImageFragment)} />;
      case "SectionCurrentProject":
        return <ProjectSection {...(data as SectionCurrentProjectFragment)} />;
      case "SectionAdministrativeTeam":
        return (
          <MemberSection
            {...(data as SectionAdministrativeTeamFragment)}
          />
        );
      case "SectionCollaborator":
        return (
          <CollaboratorSection {...(data as SectionCollaboratorFragment)} />
        );
      case "SectionTestimonial":
        return <TestimonialSection {...(data as SectionTestimonialFragment)} />;
      case "SectionService":
        //@ts-ignore
        return <SectionServices {...(data as SectionServiceFragment)} />;
      default:
        return <React.Fragment></React.Fragment>;
    }
  }
);

interface Props {
  sections: {
    id: string;
    backgroundColor: SectionFragment["backgroundColor"];
    headline: SectionFragment["title"];
    type: SectionSwitcherProps;
  }[];
}

const SectionsManager: React.FC<Props> = React.memo(({ sections }) => {
  const sectionsComponents = React.useMemo(() => {
    const res = sections.map((section) => (
      <div
        key={section.id}
        className={cn("py-10", {
          "bg-white": section.backgroundColor === "WHITE",
          "bg-secondary": section.backgroundColor === "SECONDARY",
        })}
      >
        {section.headline && (
          <div className="mb-11 mt-5 flex justify-center">
            <HeadlineComponent
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
