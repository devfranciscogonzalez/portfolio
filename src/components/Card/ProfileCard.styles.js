import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 215px;
`;

const ProfileCover = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
`;

const ProfileCoverImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge}
    ${({ theme }) => theme.borderRadius.xlarge} 0 0;
`;

const ProfileCoverText = styled.p`
  position: absolute;
  top: 89%;
  right: 2%;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  opacity: 0.7;
`;

const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
`;

const ProfileAvatarImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  top: 50%;
  margin: ${({ theme }) => theme.spacing.medium};
  /* filter: grayscale(100%); */
`;

export {
  ProfileAvatar,
  ProfileAvatarImage,
  ProfileContainer,
  ProfileCover,
  ProfileCoverImage,
  ProfileCoverText,
};
