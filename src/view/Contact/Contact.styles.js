import styled from "styled-components";

const ConctactHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
  color: ${({ theme }) => theme.colors.text.secondary}; 
`;



export { ConctactHeader };