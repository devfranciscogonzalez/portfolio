import styled from "styled-components";

const BadgeContainerSkills = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px; 
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: 20px 0; 
`;

export { BadgeContainerSkills };
