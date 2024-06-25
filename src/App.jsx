import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import Navbar from "./components/Navbar";
import { theme } from "./theme";
import { Contact, Education, Home, Project, Technology } from "./view";

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
`;
const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  scroll-behavior: smooth;
`;
const Header = styled.header``;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header>
          <Navbar />
        </Header>
        <Container>
          <Section id="home">
            <Home />
          </Section>
          <Section id="education">
            <Education />
          </Section>
          <Section id="technology">
            <Technology />
          </Section>
          <Section id="project">
            <Project />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
