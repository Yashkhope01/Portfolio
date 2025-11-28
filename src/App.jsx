import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import GlowSeparator from "./components/GlowSeparator";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <GlowSeparator />

        <Services />
        <GlowSeparator />

        <WorkExperience />
        <GlowSeparator />

        <Projects />
        <GlowSeparator />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
