import styled from "styled-components";

const ProjectDescriptionWrapper = styled.div`
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
`;

const ListDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin: 0 ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.large} 0;
`;

const ListDescription = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const ItemDescription = styled.li`
  display: flex;
  & svg {
    flex-shrink: 0;
  }
`;

const SpanDescription = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }
`;

const ProjectAnchorText = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;

  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }
`;

export {
  ItemDescription,
  ListDescription,
  ListDescriptionWrapper,
  ProjectDescriptionWrapper,
  SpanDescription,
  ProjectAnchorText,
};
