import {
  Creative,
  LogicalThinking,
  Problem,
  WorkTeam,
} from "../../assets/icon";
import { PROFILE_TEXT } from "../../constants/portfolioText";
import Badge from "./Badge";
import { BadgeContainerSkills } from "./BadgeSkills.styles";

export const BadgeSkills = () => {
  return (
    <BadgeContainerSkills>
      <Badge>
        <LogicalThinking />
        {PROFILE_TEXT.skills[0]}
        <br />
        {PROFILE_TEXT.skills[1]}
      </Badge>
      <Badge>
        <WorkTeam />
        {PROFILE_TEXT.skills[2]}
        <br />
        {PROFILE_TEXT.skills[3]}
      </Badge>
      <Badge>
        <Creative />
        {PROFILE_TEXT.skills[4]}
      </Badge>
      <Badge>
        <Problem />
        {PROFILE_TEXT.skills[5]}
        <br />
        {PROFILE_TEXT.skills[6]}
      </Badge>
    </BadgeContainerSkills>
  );
};
