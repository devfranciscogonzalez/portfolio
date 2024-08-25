import styled from "styled-components";

const MenuButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  position: absolute;
  width: 100%;
  background-color: hsla(44, 100%, 93%, 0.2);
  backdrop-filter: blur(10px);
  height: ${({ theme }) => theme.spacing.xxlarge};
  bottom: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const ProjectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.padding.xsmall};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-align: center;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  & svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.padding.xsmall};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-align: center;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  & svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export { MenuButtonWrapper, ProjectButton, ProjectAnchor };
