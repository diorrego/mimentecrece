const items: ReadonlyArray<readonly [string, string, string]> = [
  [
    "01",
    "El pecho apretado, sin razón clara.",
    "Una ansiedad de fondo que no se nombra, pero que se siente.",
  ],
  [
    "02",
    "Noches que no descansan.",
    "Aunque duermas, amaneces cansada/o.",
  ],
  [
    "03",
    "Preocupaciones que invaden el día.",
    "Pensamientos que aparecen, y se quedan.",
  ],
  [
    "04",
    "El ánimo bajo que te detiene.",
    "Cosas que antes disfrutabas, ahora cuestan.",
  ],
];

export function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="container-x">
        <div className="problem-head reveal">
          <div>
            <span className="eyebrow">02 · Si te reconoces</span>
            <h2 className="h1">
              A veces el malestar no tiene nombre. Pero sí tiene señales.
            </h2>
          </div>
          <div className="copy">
            <p className="lead">
              No es debilidad. Es información que tu cuerpo y tu mente te están
              entregando. Y se trabaja: con el tiempo, las herramientas y el
              acompañamiento adecuados.
            </p>
          </div>
        </div>

        <div className="problem-grid reveal">
          {items.map(([n, t, s]) => (
            <div className="problem-item" key={n}>
              <div className="num">{n}</div>
              <div>
                <div className="text">{t}</div>
                <div className="sub">{s}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="problem-foot reveal">
          “Reconocer lo que sientes es la primera consulta.”
        </div>
      </div>
    </section>
  );
}
