import {
  CreativeSvg,
  LogicalThinkingSvg,
  ProblemSvg,
  WorkTeamSvg,
} from "../../../../assets/icons/skills";
import { PROFILE_TEXT } from "../../../../constants/profileText";
import Badge from "./Badge";
import { BadgeSkillsContainer } from "./BadgeSkills.styles";

const BadgeSkills = () => {
  return (
    <BadgeSkillsContainer>
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
    </BadgeSkillsContainer>
  );
};

export default BadgeSkills;
