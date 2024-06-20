import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";
import { theme } from "./theme";

const Title = styled.p`
  font-family: "Whyte";
  font-size: 30px;
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
