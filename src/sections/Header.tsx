import { useState, useEffect } from "react";

const nav = [
  { id: "about", label: "About" },
  { id: "mood", label: "Mood" },
  { id: "reach-out", label: "Reach Out" },
] as const;

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    nav.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-wide text-white/90 transition hover:text-white"
        >
          ikrvell
        </a>
        <nav className="flex shrink-0 gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:gap-6 sm:text-xs">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-white/70 after:transition after:duration-300 hover:text-white hover:after:scale-x-100 ${activeSection === item.id
                  ? "text-white after:scale-x-100"
                  : "text-neutral-400 after:scale-x-0"
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
