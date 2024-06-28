import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  padding: 0 ${({ theme }) => theme.padding.large};
`;

export default MainContainer;
