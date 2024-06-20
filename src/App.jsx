import styled from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";

const Title = styled.p`
  font-family: "Whyte";
  font-size: 30px;
  font-weight: 300;
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
