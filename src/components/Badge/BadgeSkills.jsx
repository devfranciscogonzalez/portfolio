import {
  CreativeSvg,
  LogicalThinkingSvg,
  ProblemSvg,
  WorkTeamSvg,
} from "../../assets/icon/skills";
import { PROFILE_TEXT } from "../../constants/portfolioText";
import Badge from "./Badge";
import { BadgeContainerSkills } from "./BadgeSkills.styles";

const BadgeSkills = () => {
  return (
    <BadgeContainerSkills>
      <Badge>
        <LogicalThinkingSvg />
        {PROFILE_TEXT.skills[0]}
        <br />
        {PROFILE_TEXT.skills[1]}
      </Badge>
      <Badge>
        <WorkTeamSvg />
        {PROFILE_TEXT.skills[2]}
        <br />
        {PROFILE_TEXT.skills[3]}
      </Badge>
      <Badge>
        <CreativeSvg />
        {PROFILE_TEXT.skills[4]}
      </Badge>
      <Badge>
        <ProblemSvg />
        {PROFILE_TEXT.skills[5]}
        <br />
        {PROFILE_TEXT.skills[6]}
      </Badge>
    </BadgeContainerSkills>
  );
};

export default BadgeSkills;
