import styled from "styled-components";

const TechnologyList = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  padding: 0;
  list-style: none;
`;

const TechnologyItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 180px;
  padding: 0.5rem 0;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text.secondary};
  svg + svg {
    filter: blur(16px);
    opacity: 0.2;
    position: absolute;
    width: 120px;
    height: 120px;
  }
`;

export { TechnologyList, TechnologyItem };
