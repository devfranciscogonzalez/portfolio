import styled from "styled-components";

const CardContainer = styled.article`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.hover.secondary};

  &:hover #camanchaca,
  &:hover #clr {
    color: #0040b0;
    text-decoration: underline;
  }

  &:hover #check {
    fill: #22c55e;
  }
  
  &:hover #dot {
    fill: #2d5290;
  }

`;

const CardContent = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CardHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const CardContentLeft = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
  padding-left: ${({ $right, theme }) => ($right ? 0 : theme.padding.medium)};
  padding-top: ${({ theme }) => theme.padding.large};
  padding-bottom: ${({ theme }) => theme.padding.large};
  padding-right: ${({ $right, theme }) => ($right ? theme.padding.medium : 0)};

  order: ${({ $right }) => ($right ? 1 : "initial")};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: ${({ theme }) => theme.padding.medium};
    padding-right: ${({ theme }) => theme.padding.medium};
    padding-top: ${({ theme }) => theme.padding.large};
    padding-bottom: 0;
  }
`;

const CardContentRight = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  min-width: 360px;
  border-radius: 0 ${({ theme }) => theme.borderRadius.medium}
    ${({ theme }) => theme.borderRadius.medium} 0;
  position: relative;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    width: 100%;
    min-width: 100%;
  }
`;

const CardVideo = styled.div`
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.padding.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

const CardAnchorTitle = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  max-width: 100%;
  min-width: 0px;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #0040b0;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: ${({ theme }) => theme.lineHeights.medium};
    & svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
`;

const CardSpan = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  max-width: 100%;
  min-width: 0px;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 360 / 333;
  object-fit: cover;

  ${({ $right, theme }) => $right 
    ? `border-radius: ${theme.borderRadius.medium} 0 0 ${theme.borderRadius.medium}` 
    : `border-radius: 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium} 0`
};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.medium} ${({ theme }) => theme.borderRadius.medium};
  }
`;

export {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardImg,
  CardVideo,
  CardAnchorTitle,
  CardSpan,
};
