import styled, { css } from "styled-components";

const SectionBase = styled.section`
  display: flex;
  padding: ${({ theme }) => theme.spacing.section} 0;

  /* @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium} 0;
  } */
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

// const fullWidthStyles = css`
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.colors.primary};
// `;

const Section = styled(SectionBase)`
  ${({ $variant }) => {
    switch ($variant) {
      case "center":
        return centerStyles;
      case "start":
        return startStyles;
      // case "fullWidth":
      //   return fullWidthStyles;
      case "first":
        return firstStyles;
      default:
        return "";
    }
  }}
`;

export { Section };
