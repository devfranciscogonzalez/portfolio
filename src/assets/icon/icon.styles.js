import styled from "styled-components";

const Svg = styled.svg`
  width: 16px;
  fill: ${({ theme }) => theme.colors.primary};
`;

const SvgMedium = styled.svg`
  width: 24px;
`;

  export { Svg, SvgMedium};
