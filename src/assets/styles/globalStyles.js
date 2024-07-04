import { createGlobalStyle } from "styled-components";
import {
  ApercuMonoLight,
  ApercuMonoRegular,
  ApercuMonoMedium,
  ApercuMonoBold,
  WhyteLight,
  WhyteRegular,
  WhyteMedium,
  WhyteBold,
  PlayfairDisplay,
} from "../fonts";

const GlobalStyles = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
  }
  
  *,*::before,*::after {
    box-sizing: border-box;
  } 

  :root {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100dvh;
    background-color: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.primary};
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
    max-width: 100%;
    height: auto;
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

  /* @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMonoRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  } */

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

  @font-face {
    font-family: "Whyte";
    src: url(${WhyteLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }
  /* button */
  @font-face {
    font-family: "Whyte";
    src: url(${WhyteRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "Whyte";
    src: url(${WhyteMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  /* @font-face {
    font-family: "Whyte";
    src: url(${WhyteBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  } */

  @font-face {
    font-family: "Playfair Display";
    src: url(${PlayfairDisplay}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
`;

export default GlobalStyles;
