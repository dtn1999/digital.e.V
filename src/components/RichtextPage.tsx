import React from "react";
import Container from "./Container";
import RichtextRenderer from "./common/RichtextRenderer";
interface Props {
  blok: any;
}
const RichtextPage: React.FC<Props> = React.memo(({ blok }) => {
  const { content } = blok;
  return (
    <Container>
      <div className="px-4">
        <RichtextRenderer content={content} />
      </div>
    </Container>
  );
});
export default RichtextPage;
