import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { theme } from "./theme";

const Title = styled.h1`
  font-family: "Whyte";
  font-size: 3em;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Title>Wythe Light</Title>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
