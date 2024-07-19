import styled, { css } from "styled-components";

const SectionBase = styled.section`
  height: 100vh;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.utility.border};
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
      default:
        return "";
    }
  }}
`;

export { Section };
