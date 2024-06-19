import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";

const Title = styled.h1`
  font-family: "Apercu Mono";
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Title>¡Hola, Mundo! 0 1 </Title>
      </div>
    </>
  );
}

export default App;
