import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/sections/Projects";
import Freelance from "./components/sections/Freelance";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ProjectDetails from "./components/dialogs/ProjectDetails";
import { useState } from "react";
import { Toaster } from "react-hot-toast";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.16) 0%,
      rgba(201, 32, 184, 0) 60%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 100, 209, 0) 50%,
      rgba(0, 100, 209, 0.2) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: theme.card,
            color: theme.text_primary,
            border: `1px solid ${theme.text_secondary}55`,
          },
          loading: { iconTheme: { primary: theme.primary, secondary: theme.bgLight } },
          success: { duration: 4000, iconTheme: { primary: "#15803d", secondary: "#fff" } },
          error: {
            duration: 6500,
            iconTheme: { primary: "#dc2626", secondary: "#fff" },
          },
        }}
      />
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <Body>
          <StartCanvas />
          <AnimatePresence>
            <main>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Freelance setOpenModal={setOpenModal} />
              <Wrapper>
                <Certificates />
              </Wrapper>
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
            </main>
            <Footer />
            {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
