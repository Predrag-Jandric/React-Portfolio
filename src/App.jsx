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

export default function App() {
  return (
    <main className="flex flex-col gap-10 m-0 p-0 box-border scroll-smooth list-none no-underline outline-none">
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
  );
}
