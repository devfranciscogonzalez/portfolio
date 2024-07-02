import styled from "styled-components";

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export { Svg };
