import styled from "styled-components";

const BadgeSkillsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.padding.small} 0;

`;


export { BadgeSkillsContainer };
