import "./App.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <Projects />

      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
