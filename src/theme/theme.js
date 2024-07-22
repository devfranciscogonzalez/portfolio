export const theme = {
  colors: {
    // Colores base
    black: "hsl(0, 0%, 15%)",
    white: "hsl(0, 0%, 100%)",
    cream: "hsl(44, 100%, 93%)",
    gray: {
      light: "hsl(0, 0%, 64%)",
      medium: "hsl(0, 0%, 54%)",
      dark: "hsl(0, 0%, 44%)",
    },

    // Colores semánticos
    primary: "hsl(0, 0%, 15%)",
    secondary: "hsl(44, 100%, 93%)",
    tertiary: "hsl(0, 0%, 64%)",

    // Estados de hover
    hover: {
      primary: "hsla(0, 0%, 15%, 0.8)",
      secondary: "hsla(0, 0%, 15%, 0.1)",
    },

    // Texto
    text: {
      primary: "hsl(0, 0%, 15%)",
      secondary: "hsl(44, 100%, 93%)",
      tertiary: "hsl(0, 0%, 64%)",
    },

    // Fondos
    background: {
      light: "hsl(44, 100%, 93%)",
    },

    // Sombras y bordes
    utility: {
      shadow: "hsla(0, 0%, 0%, 0.08)",
      border: "hsla(0, 0%, 15%, 0.1)",
    },
  },
  spacing: {
    xsmall: ".25rem",
    small: ".5rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
    xxlarge: "3rem",
    header: "4rem",
  },
  padding: {
    xsmall: ".25rem",
    small: ".5rem",
    smallMedium: ".75rem", //responsive button
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
    // xxlarge: "3rem",
  },
  borderRadius: {
    small: "2px",
    medium: "5px",
    // large: "8px",
    xlarge: "16px",
  },
  zIndex: {
    fixed: 1000,
  },
  breakpoints: {
    smallMobile: "30rem",
    mobile: "36rem",
    tablet: "48rem",
    laptop: "62rem",
    desktop: "70rem",
  },
  fonts: {
    primary: "Whyte",
    secondary: "Apercu Mono",
    tertiary: "Playfair Display",
  },
  fontSizes: {
    xsmall: ".75rem",
    small: "1rem",
    medium: "1.25rem",
    // mediumLarge: "1.375rem",
    large: "1.5rem",
    xlarge: "2.5rem",
    xxlarge: "4rem",
  },
  lineHeights: {
    // small: 1.0,
    medium: 1.3,
    // large: 1.6,
  },
  letterSpacings: {
    small: ".0625rem",
    medium: ".125rem",
    // large: ".25rem",
    // large: "1rem",
  },
};
