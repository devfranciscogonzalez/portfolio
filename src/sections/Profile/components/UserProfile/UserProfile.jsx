import { setup, userPhoto } from "../../../../assets/images";
import {
  UserAvatar,
  UserAvatarImage,
  UserContainer,
  UserCoverImage,
} from "./UserProfile.styles";

export const UserProfile = () => {
  return (
    <UserContainer>
      <UserCoverImage src={setup} alt="Imagen de portada del perfil" />
      <UserAvatar>
        <UserAvatarImage src={userPhoto} alt="Foto de perfil del usuario" />
      </UserAvatar>
    </UserContainer>
  );
};

export default UserProfile;
