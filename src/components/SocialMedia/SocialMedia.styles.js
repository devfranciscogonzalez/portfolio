import styled from "styled-components";

const SocialMediaButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: background-color 0.3s ease;

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }
`;
export { SocialMediaButton };
