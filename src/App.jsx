import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import {
  ContactSection,
  EducationSection,
  HomeSection,
  Layout,
  ProfileSection,
  ProjectSection,
  TechnologySection,
} from "./components";
import { theme } from "./theme/theme";

// TODO: Update section delete section component
// TODO: rename svg component
// TODO: section constants

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <HomeSection />
          <ProfileSection />
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
