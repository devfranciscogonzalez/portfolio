import { Svg } from "../icons.styles";

const Figma = () => (
  <Svg
    $size="xlarge"
    fill="none"
    viewBox="-10 0 70 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <path d="M13 80c8 0 14-6 14-13V53H13a13 13 0 0 0 0 27Z" fill="#0ACF83" />
      <path d="M0 40c0-7 6-13 13-13h14v26H13C6 53 0 47 0 40Z" fill="#A259FF" />
      <path d="M0 13C0 6 6 0 13 0h14v27H13C6 27 0 21 0 13Z" fill="#F24E1E" />
      <path d="M27 0h13a13 13 0 0 1 0 27H27V0Z" fill="#FF7262" />
      <path d="M53 40a13 13 0 1 1-26 0 13 13 0 0 1 26 0Z" fill="#1ABCFE" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h53v80H0z" />
      </clipPath>
    </defs>
  </Svg>
);
export default Figma;
