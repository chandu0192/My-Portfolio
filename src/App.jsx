import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import Hire from "./components/Hire";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div
      data-theme={theme}
      className={`min-h-screen transition-colors duration-300 ${theme === "dark"
          ? "bg-neutral-950 text-neutral-100"
          : "bg-white text-neutral-900"
        }`}
    >
      <Navbar
        theme={theme}
        setTheme={setTheme}
        setActiveSection={(sec) => {
          setActiveSection(sec);
          setActiveProject(null); // 🔥 CRITICAL RESET
        }}
        setActiveProject={setActiveProject}
      />

      {/* 🔥 PRIORITY VIEW */}
      <main id="main-content">
      {activeProject ? (
        <ProjectDetail
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      ) : activeSection === "projects" ? (
        <Projects setActiveProject={setActiveProject} />
      ) : activeSection === "hire" ? (
        <Hire />
      ) : activeSection === "contact" ? (
        <Contact />
      ) : (
        <>
          <Home setActiveSection={setActiveSection} />
          <About />
          <Skills />
          <Contact />
        </>
      )}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
