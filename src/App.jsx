import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import { theme } from "./theme";
import {
  Layout,
  HomeSection,
  EducationSection,
  TechnologySection,
  ProjectSection,
  ContactSection,
} from "./components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <HomeSection />
          <EducationSection />
          <TechnologySection />
          <ProjectSection />
          <ContactSection />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
