import { MouseTrail } from "./components/MouseTrail";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Mood } from "./sections/Mood";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100 selection:bg-white/20 selection:text-white">
      <MouseTrail />
      <Header />

      <main
        id="top"
        className="mx-auto max-w-5xl px-5 pb-28 pt-28 sm:px-8 sm:pt-36"
      >
        <Hero />
        <About />
        <Mood />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
