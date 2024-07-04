import styled from "styled-components";

const BadgeContainerSkills = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: ${({ theme }) => theme.padding.small} 0;
`;

export { BadgeContainerSkills };
