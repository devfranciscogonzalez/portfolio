import styled from "styled-components";

const sizeMap = {
  xsmall: "13px",
  small: "16px",
  smallMedium: "19px",
  medium: "24px",
  large: "28px",
  xlarge: "60px",
  check: "35px",
  logo: "30px"
};

const Svg = styled.svg`
  height: ${({ $size }) => sizeMap[$size] || sizeMap.medium};
  width: ${({ $size }) => sizeMap[$size] || sizeMap.medium};
`;

export { Svg };
