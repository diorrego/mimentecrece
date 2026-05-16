"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="container-x nav-inner">
        <a href="#top" className="brand">
          <span>
            <span className="mark"></span>mimente<em>crece</em>
          </span>
        </a>
        <div className="nav-links">
          <a href="#problema">Si te reconoces</a>
          <a href="#sobre">Sobre mí</a>
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#areas">Áreas</a>
          <a href="#faq">Preguntas</a>
        </div>
        <a
          className="btn btn-primary btn-sm"
          href="https://centromedicointegramente.cl/agendamiento-de-hora/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
