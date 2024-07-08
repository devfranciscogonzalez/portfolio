import styled from "styled-components";

const TechnologiesList = styled.ol`
  padding: 0;
  list-style: none;
`;

const TechnologyItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 0.5rem 0;
  color: #333;
  height: 180px;
  width: 180px;
  border: 2px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  svg + svg {
    filter: blur(16px);
    opacity: 0.5;
    position: absolute;
    width: 120px;
    height: 120px;
  }
`;

export { TechnologiesList, TechnologyItem };
