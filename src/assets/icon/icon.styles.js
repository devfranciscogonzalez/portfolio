import styled from "styled-components";

const Svg = styled.svg`
  width: 16px;
  fill: ${({ theme }) => theme.colors.primary};
`;

const SvgMedium = styled.svg`
  width: 24px;
  height: 24px;
`;

const SvgSocialMedia = styled.svg`
  width: 20px;
  height: 20px;
`;

const SvgTechnology = styled.svg`
  width: 55px;
  min-height: 55px;
`;

export { Svg, SvgMedium, SvgSocialMedia, SvgTechnology };
