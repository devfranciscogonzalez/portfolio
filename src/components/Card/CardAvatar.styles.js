import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 210px;
  
`;

const CardCover = styled.div`
  width: 100%;
  height: 130px;
`;

const CardCoverImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
`;

const CardAvatarContainer = styled.div`
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

const CardAvatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  top: 50%;
  margin: ${({ theme }) => theme.spacing.medium};
  filter: grayscale(100%);
`;

export {
  CardContainer,
  CardCover,
  CardCoverImage,
  CardAvatarContainer,
  CardAvatar,
};
