import styled from "styled-components";
import { logoUbbColor } from "../../../../assets/images";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.padding.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.small};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.utility.border};
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
`;
const CardLogoAnchor = styled.a`
  min-width: 180px;

  &:hover img {
    content: url(${logoUbbColor});
  }
`;

const CardLogoImg = styled.img`
  width: 180px;
`;

export { CardContent, CardHeader, CardLogoAnchor, CardLogoImg, Card };
