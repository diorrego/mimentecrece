const steps = [
  {
    num: "01",
    title: "Agendas tu hora.",
    body: "A través del sistema seguro de Centro Médico IntegraMente. Eliges día y horario que te acomoden, sin formularios largos.",
  },
  {
    num: "02",
    title: "Nos conectamos.",
    body: "Videoconsulta de 40 minutos en plataforma certificada para telemedicina, conforme a la Ley 21.541. Cámara opcional en la primera sesión.",
  },
  {
    num: "03",
    title: "Recibes tu plan.",
    body: "Indicaciones por escrito, derivaciones si corresponde y un seguimiento que respeta tu ritmo. Sin sorpresas, sin tecnicismos.",
  },
];

export function Method() {
  return (
    <section className="method" id="metodo">
      <div className="container-x">
        <div className="method-head reveal">
          <div>
            <span className="eyebrow">04 · El método</span>
            <h2 className="h1" style={{ marginTop: 18 }}>
              Tres pasos.
              <br />
              <em className="italic" style={{ color: "#E8B998" }}>
                Sin sorpresas.
              </em>
            </h2>
          </div>
          <p className="copy">
            Toda la fricción del trámite la resolvemos antes de la primera
            sesión. Tu energía es para lo que importa: lo que sientes.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div>
                <div className="step-title">{s.title}</div>
                <div className="step-body">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
