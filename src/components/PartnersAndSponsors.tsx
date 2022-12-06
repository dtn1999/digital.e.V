import React from "react";
import Container from "./Container";
import { storyblokEditable } from "@storyblok/react";
import CollaboratorCard from "./CollaboratorCard";

interface Props {
  blok: any;
}

const PartnersAndSponsors: React.FC<Props> = React.memo(({ blok }) => {
  const story = React.useMemo(() => blok, [blok]);
  const { collaborators } = story;
  return (
    <Container>
      <div {...storyblokEditable(blok)}>
        {collaborators.map(({ content, full_slug }: any) => (
          <React.Fragment key={content?._uid}>
            {content && (
              <CollaboratorCard
                slug={full_slug}
                collaborator={content}
                withNavigation
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
});
export default PartnersAndSponsors;
