import setup from "../../assets/images/setup.webp";
import profile from "../../assets/images/profile.webp";
import {
  ProfileAvatar,
  ProfileAvatarImage,
  ProfileContainer,
  ProfileCover,
  ProfileCoverImage,
  ProfileCoverText,
} from "./ProfileCard.styles";

export const ProfileCard = () => {
  return (
    <ProfileContainer>
      <ProfileCover>
        <ProfileCoverImage src={setup} alt="cover" />
        <ProfileCoverText>Setup - 4 de julio de 2024</ProfileCoverText>
      </ProfileCover>
      <ProfileAvatar>
        <ProfileAvatarImage src={profile} alt="avatar" />
      </ProfileAvatar>
    </ProfileContainer>
  );
};

export default ProfileCard;
