import styled from "styled-components";

const sizeMap = {
  small: "16px",
  medium: "24px",
  large: "28px",
  xlarge: "60px",
  logo: "30px"
};

const Svg = styled.svg`
  height: ${({ $size }) => sizeMap[$size] || sizeMap.medium};
  width: ${({ $size }) => sizeMap[$size] || sizeMap.medium};
`;

export { Svg };
