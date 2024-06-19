import { createGlobalStyle } from "styled-components";
import {
  ApercuMonoLight,
  ApercuMonoRegular,
  ApercuMonoMedium,
  ApercuMonoBold,
} from "./assets/fonts";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoLight}) format("truetype");
    font-style: normal;
    font-weight:300;
    font-display: fallback;
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoRegular}) format("truetype");
    font-style: normal;
    font-weight:400;
    font-display: fallback;
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoMedium}) format("truetype");
    font-style: normal;
    font-weight:500;
    font-display: fallback;
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoBold}) format("truetype");
    font-style: normal;
    font-weight:700;
    font-display: fallback;
  }

`;

export default GlobalStyles;
