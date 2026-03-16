import ScrollyCanvas from "../components/ScrollyCanvas";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen">
      
      {/* Hero section with Canvas Scrollytelling & Parallax Overlays */}
      <ScrollyCanvas />

      {/* Main Content Areas */}
      <div className="relative z-10 bg-black shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </main>
  );
}
