import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";

const Title = styled.p`
  font-family: "Wythe";
  font-size: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Title>Wythe Light</Title>
      </div>
    </>
  );
}

export default App;
