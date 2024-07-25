import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import { Home, Profile, Education, Contact, Technology } from "./sections";
import { theme } from "./theme/theme";
import { Layout } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Home />
        <Profile />
        <Education />
        <Technology />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
