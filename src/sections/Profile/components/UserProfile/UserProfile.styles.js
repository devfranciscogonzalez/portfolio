import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 210px;
`;

const UserCoverImage = styled.img`
  width: 100%;
  height: 140px;
  aspect-ratio: 4096 / 1302;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge}
    ${({ theme }) => theme.borderRadius.xlarge} 0 0;
`;

const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0%;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

const UserAvatarImage = styled.img`
  width: 130px;
  height: 130px;
  aspect-ratio: 2160 / 2108;
  border-radius: 50%;
`;

export { UserAvatar, UserAvatarImage, UserContainer, UserCoverImage };
