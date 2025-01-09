import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
// import Achivements from "./components/Achivements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden; 
`


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />

          <Skills />
          <Experience />
          {/* <Achivements /> */}

          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          <Education />
          <Contact />

          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }


        </Body>

      </Router>
    </ThemeProvider>
  );
}

export default App;
