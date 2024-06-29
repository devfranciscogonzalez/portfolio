import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.padding.header};
`;

export default Section;
