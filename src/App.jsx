import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Endorsements from "./components/Endorsements";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <main className="flex font-body flex-col gap-10 m-0 p-0 box-border scroll-smooth list-none no-underline outline-none">
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
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </Router>
      )}
    </>
  );
}
