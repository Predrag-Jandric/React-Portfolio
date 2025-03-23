import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import Roadmap from "./components/Roadmap";
import Endorsements from "./components/Endorsements";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ProjectDetails from "./components/projects/ProjectDetails";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToHash from "./utils/ScrollToHash";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <main className="m-0 box-border flex list-none flex-col gap-10 scroll-smooth p-0 font-body no-underline outline-none">
              <Hero />
              <Title text="About" />
              <About />
              <Title text="Skills" />
              <Skills />
              <Title text="Projects" />
              <Projects />
              <Title text="Roadmap" />
              <Roadmap />
              <Title text="Endorsements" />
              <Endorsements />
              <Title text="Faq" />
              <Faq />
              <Footer />
            </main>
          }
        />
        <Route path="/:projectName" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}
