import styled from "styled-components";

const Svg = styled.svg`
  width: 20px;
  height: 100%;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export { Svg };
