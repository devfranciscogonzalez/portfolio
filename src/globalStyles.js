import { createGlobalStyle } from "styled-components";
import {
  ApercuMonoLight,
  ApercuMonoRegular,
  ApercuMonoMedium,
  ApercuMonoBold,
} from "./assets/fonts";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  *,*::before,*::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100dvh;
  }

  input, button {
    font: inherit;
  }

  p {
    text-wrap: pretty;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }
  
  img, svg {
    height: auto;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`;

export default GlobalStyles;
