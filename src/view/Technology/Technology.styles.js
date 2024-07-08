import styled from "styled-components";

// const TechnologyContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const TechnologyHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
`;

const TechnologyWrapper = styled.div`
  margin: 0 auto;
`;

export {
  //  TechnologyContainer,
  TechnologyHeader,
  TechnologyWrapper,
};
