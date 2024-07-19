import { userPhoto, setup } from "../../../../assets/images";
import {
  UserAvatar,
  UserAvatarImage,
  UserContainer,
  UserCover,
  UserCoverImage,
  UserCoverText,
} from "./UserProfile.styles";

export const UserProfile = () => {
  return (
    <UserContainer>
      <UserCover>
        <UserCoverImage src={setup} alt="cover" />
        <UserCoverText>Setup - 4 de julio de 2024</UserCoverText>
      </UserCover>
      <UserAvatar>
        <UserAvatarImage src={userPhoto} alt="avatar" />
      </UserAvatar>
    </UserContainer>
  );
};

export default UserProfile;
