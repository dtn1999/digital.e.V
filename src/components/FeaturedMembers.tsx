import React from "react";
import cn from "classnames";
import { ButtonVariant } from "@app/types/graphql";
import Button from "src/components/common/Button";

import MemberCard from "./MemberCard";
import { storyblokEditable } from "@storyblok/react";

interface Props {
  blok: any;
}

const FeaturedMembers: React.FC<Props> = React.memo(({ blok }) => {
  const memoBlok = React.useMemo(() => blok, [blok]);
  const {
    members,
    cta: [cta],
  } = memoBlok;
  const navigate = React.useCallback((to: string) => {}, []);
  return (
    <React.Fragment>
      <div
        {...storyblokEditable(memoBlok)}
        className={cn(
          "w-full grid md:grid-cols-2 lg:grid-cols-4  gap-8 px-4 mb-8"
        )}
      >
        {members?.map((member: any) => (
          <MemberCard
            key={member._uid || member.id || member.uuid}
            member={member.content}
          />
        ))}
      </div>
      <div className="flex w-full items-center justify-center pb-8">
        {cta && (
          <div className="mt-9 flex justify-start">
            <a
              onClick={() => navigate((cta.href as any)?.cached_url)}
              className="flex cursor-pointer items-center space-x-1 text-xs font-medium uppercase text-primary hover:text-black"
            >
              <Button variant={ButtonVariant.Outline}>{cta.label}</Button>
            </a>
          </div>
        )}
      </div>
    </React.Fragment>
  );
});
export default FeaturedMembers;
