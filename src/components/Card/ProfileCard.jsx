import profile from "../../assets/images/profile.jpg";
import cover from "../../assets/images/cover.png";
import { BadgeSkills } from "../Badge/BadgeSkills";
import {
  CardContainer,
  CardCover,
  CardCoverImage,
  CardAvatarContainer,
  CardAvatar,
} from "./CardAvatar.styles";

export const ProfileCard = () => {
  return (
    <>
      <CardContainer>
        <CardCover>
          <CardCoverImage src={cover} alt="cover" />
        </CardCover>
        <CardAvatarContainer>
          <CardAvatar src={profile} alt="avatar" />
        </CardAvatarContainer>
      </CardContainer>
      <BadgeSkills />
    </>
  );
};

export default ProfileCard;
