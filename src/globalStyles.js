import { createGlobalStyle } from "styled-components";
import ApercuMono from "./assets/fonts/ApercuMonoProLight.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMono}) format("truetype");
    font-display: fallback; 
  }
`;

export default GlobalStyles;
