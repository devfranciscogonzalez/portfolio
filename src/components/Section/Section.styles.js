import styled from "styled-components";
// TODO: utilizar la opcion de variant;

const CenterSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: ${({ theme }) => theme.padding.header}; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.secondary};
`;

const StartSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.secondary};
`;

export { CenterSection, StartSection };
