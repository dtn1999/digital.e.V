import React from "react";
import cn from "classnames";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
interface Props {
  member: any;
}
const MemberCard: React.FC<Props> = React.memo(({ member }) => {
  if (!member) return null;
  return (
    <div
      {...storyblokEditable(member)}
      className="flex flex-col"
    >
      <div className="relative overflow-hidden rounded-full pb-[100%]">
        <Image
          src={member.picture?.filename || "/images/person-placeholder.jpg"}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="object-cover object-center"
        />
      </div>
      <h3 className="text-center text-lg font-bold">{member.name}</h3>
      <p className="text-center text-xs font-light">{member.position}</p>
    </div>
  );
});
export default MemberCard;
