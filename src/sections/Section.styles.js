import styled, { css } from "styled-components";

const SectionBase = styled.section`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing.header};
`;

// HOME
const firstStyles = css`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100dvh;
`;

// PROFILE & CONTACT & TECHNOLOGY
const centerStyles = css`
  align-items: center;
`;

// EDUCATION
const startStyles = css`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Section = styled(SectionBase)`
  ${({ $variant }) => {
    switch ($variant) {
      case "center":
        return centerStyles;
      case "start":
        return startStyles;
      case "first":
        return firstStyles;
      default:
        return "";
    }
  }}
`;

export { Section };
