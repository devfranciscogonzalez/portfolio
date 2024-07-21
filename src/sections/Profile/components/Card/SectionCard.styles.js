import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-right: ${({ theme }) => theme.spacing.medium};

  & h4 {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;
export { SectionWrapper };
