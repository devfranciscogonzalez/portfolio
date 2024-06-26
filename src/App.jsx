import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import { theme } from "./theme";
import { Contact, Education, Home, Project, Technology } from "./view";
import { Layout } from "./components";

const Section = styled.section`
  height: 100vh;
  padding-top: ${({ theme }) => theme.spacing.header};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
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
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
