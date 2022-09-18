import React from "react";
import cn from "classnames";
import { SectionAdministrativeTeamFragment } from "@app/types/graphql";
import Image from "next/image";
interface Props {
  team: SectionAdministrativeTeamFragment["team"];
}
const AdministrativeTeamSection: React.FC<Props> = React.memo(
  ({ team = [] }) => {
    return (
      <div className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-8")}>
        {team.map(({ id, profileImage, position, name }) => (
          <div key={id} className="flex flex-col">
            <div className="relative overflow-hidden rounded-full pb-[100%]">
              <Image
                src={profileImage?.url || ""}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-center text-lg font-bold">{name}</h3>
            <p className="text-center text-xs font-light">{position}</p>
          </div>
        ))}
      </div>
    );
  }
);
export default AdministrativeTeamSection;