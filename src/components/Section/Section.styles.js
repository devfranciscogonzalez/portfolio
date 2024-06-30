import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: ${({ theme }) => theme.padding.header}; */
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.border};
`;

export default Section;
