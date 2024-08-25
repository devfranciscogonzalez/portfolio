import styled from "styled-components";

const BadgeSkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.utility.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.utility.border};
  padding: ${({ theme }) => theme.padding.small} 0;
  gap: ${({ theme }) => theme.spacing.xsmall};

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`;

export { BadgeSkillsContainer };
