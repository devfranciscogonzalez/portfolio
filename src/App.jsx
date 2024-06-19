import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";

const Title = styled.p`
  font-family: "Apercu Mono";
  font-weight: 100;
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
