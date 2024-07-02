import styled from "styled-components";

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export { Svg };
