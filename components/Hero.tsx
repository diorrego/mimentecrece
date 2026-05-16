import Image from "next/image";

type HeroCopy = { h1Pre: string; h1Em: string };

export function Hero({ copy }: { copy: HeroCopy }) {
  return (
    <section className="hero" id="top">
      <div className="container-x hero-grid">
        <div className="hero-copy reveal">
          <div className="meta">
            <span className="meta-dot"></span>
            <span className="eyebrow sage">
              Salud mental online · Chile
            </span>
          </div>

          <h1 className="h-display">
            {copy.h1Pre}
            <br />
            <em className="italic">{copy.h1Em}</em>
          </h1>

          <p className="lead">
            Soy la{" "}
            <strong style={{ fontWeight: 500, color: "var(--ink)" }}>
              Dra. Camila Collao
            </strong>
            , médico con formación en salud mental. Acompaño a personas con
            ansiedad, estrés y bajones anímicos. Atención online a través del
            Centro Médico IntegraMente.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://centromedicointegramente.cl/agendamiento-de-hora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar consulta <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#sobre">
              Conocer más
            </a>
            <span className="micro">
              40 min · videoconsulta segura · boleta médica
            </span>
          </div>
        </div>

        <div className="hero-photo reveal">
          <div className="photo-frame">
            <Image
              src="/2.jpg"
              alt="Dra. Camila Collao, médico con formación en salud mental"
              fill
              priority
              sizes="(max-width: 880px) 360px, 410px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="badge badge-1">
            <i></i> Médico Cirujano
          </div>
          <div className="badge badge-2">
            <i></i> Reg. Superintendencia
          </div>
        </div>
      </div>
    </section>
  );
}
