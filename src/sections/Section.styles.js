import styled, { css } from "styled-components";

const SectionBase = styled.section`
  padding-top: ${({ theme }) => theme.spacing.header};
`;

const Section = styled(SectionBase)`
  ${({ $variant }) => 
    $variant === "first" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      min-height: 100dvh;
      position: relative;
    `}
`;

export { Section };
