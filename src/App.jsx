/* eslint-disable no-unused-vars */
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
import Test from "./components/Button";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Set loading to false when the page is fully loaded
    };

    // Listen for the 'load' event on the window to detect when all assets are loaded
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup event listener
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        // Main App Content
        <main className="flex flex-col gap-10 m-0 p-0 box-border scroll-smooth list-none no-underline outline-none">
          <Hero />

          <Title text="About" />
          {/* <Test /> */}
          <About />
          <Title text="Skills" />
          <Skills />
          <Title text="Projects" />
          {/* <Projects /> */}
          <Title text="Roadmap" />
          <Roadmap />
          <Title text="Endorsements" />
          <Endorsements />
          <Title text="Faq" />
          <Faq />
          <Footer />
        </main>
      )}
    </>
  );
}
