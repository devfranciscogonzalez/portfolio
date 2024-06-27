import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
`;

export default MainContainer;
