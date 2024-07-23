import styled, { css } from "styled-components";

const SectionBase = styled.section`
  display: flex;
  min-height: 80dvh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.utility.border};
`;

const firstStyles = css`
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
`;

const centerStyles = css`
  justify-content: center;
  align-items: center;
`;

const startStyles = css`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const fullWidthStyles = css`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Section = styled(SectionBase)`
  ${({ $variant }) => {
    switch ($variant) {
      case "center":
        return centerStyles;
      case "start":
        return startStyles;
      case "fullWidth":
        return fullWidthStyles;
      case "first":
        return firstStyles;
      default:
        return "";
    }
  }}
`;

export { Section };
