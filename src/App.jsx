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
import Test from "./components/Test";

export default function App() {
  return (
    <main className="flex flex-col gap-10 m-0 p-0 box-border scroll-smooth list-none no-underline outline-none">
      <Hero />
      {/* <Test /> */}
      {/* <Title text="Roadmap"/> */}
      {/* <About />  */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Roadmap /> */}
      {/* <Endorsements /> */}
      {/* <Faq /> */}
      {/* <Footer /> */}
    </main>
  );
}
