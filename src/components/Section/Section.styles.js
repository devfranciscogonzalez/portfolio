import styled from "styled-components";
// TODO: utilizar la opcion de variant;

const CenterSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: ${({ theme }) => theme.padding.header}; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.secondary};
`;3

const StartSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.secondary};
`;

const FullWidthSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export { CenterSection, StartSection, FullWidthSection };
