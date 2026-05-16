const areas: ReadonlyArray<readonly [string, string, string]> = [
  [
    "01",
    "Ansiedad y crisis de pánico",
    "Para quienes viven con un fondo permanente de alerta, o atraviesan episodios agudos.",
  ],
  [
    "02",
    "Estrés sostenido y burnout",
    "Cuando la exigencia laboral o de cuidado se acumula y empieza a pasar factura.",
  ],
  [
    "03",
    "Síntomas depresivos",
    "Bajones anímicos, pérdida de motivación, fatiga, alteraciones del sueño o el apetito.",
  ],
  [
    "04",
    "Acompañamiento clínico en salud mental",
    "Espacio sostenido para personas con un diagnóstico previo o en proceso de exploración.",
  ],
  [
    "05",
    "Manejo medicamentoso, cuando es necesario",
    "Indicación responsable, conversada y revisada. Nunca primera ni única respuesta.",
  ],
];

export function Areas() {
  return (
    <section id="areas">
      <div className="container-x">
        <div className="areas-grid">
          <div className="areas-head reveal">
            <span className="eyebrow">05 · Áreas</span>
            <h2 className="h1" style={{ marginTop: 18 }}>
              Lo que <em className="italic">abordo.</em>
            </h2>
            <p>
              Si tu situación no calza exactamente con esta lista, agenda una
              primera consulta. Conversamos y, si corresponde, derivo.
            </p>
          </div>

          <div className="area-list reveal">
            {areas.map(([n, t, d]) => (
              <a
                className="area"
                key={n}
                href="https://centromedicointegramente.cl/agendamiento-de-hora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="num">{n}</div>
                <div className="body-col">
                  <div className="title">{t}</div>
                  <div className="desc">{d}</div>
                </div>
                <div className="arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
