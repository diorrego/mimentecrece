import Image from "next/image";

export function About() {
  return (
    <section id="sobre">
      <div className="container-x">
        <div className="about-grid">
          <div className="about-photo reveal">
            <Image
              src="/1.jpg"
              alt="Dra. Camila Collao"
              fill
              sizes="(max-width: 880px) 380px, 430px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="about-body reveal">
            <span className="eyebrow sage">03 · Sobre Camila · la guía</span>
            <h2 className="h1">
              Médico cirujano con formación en{" "}
              <em className="italic">salud mental</em>.
            </h2>
            <p className="lead">
              Egresada de la Universidad San Sebastián. Mi enfoque es
              biopsicosocial: integro la evidencia clínica con la escucha
              activa, porque entiendo que cada historia es única.
            </p>
            <p className="body">
              Atiendo a personas que atraviesan ansiedad, estrés sostenido,
              crisis emocionales y síntomas depresivos. Mi formación continúa
              porque la salud mental también lo hace.
            </p>

            <div className="creds">
              <div className="row">
                <div className="label">Pregrado</div>
                <div className="value">
                  Medicina · Universidad San Sebastián
                  <small>Cirujano titulada</small>
                </div>
              </div>
              <div className="row">
                <div className="label">Diplomada</div>
                <div className="value">
                  Clínica en Psicosis Esquizofrénicas y Afines
                  <small>Universidad de Chile · 2024</small>
                </div>
              </div>
              <div className="row">
                <div className="label">En curso</div>
                <div className="value">
                  Diplomado en Psicofarmacología
                  <small>Pontificia Universidad Católica</small>
                </div>
              </div>
              <div className="row">
                <div className="label">Registro</div>
                <div className="value">
                  Prestador Individual de Salud
                  <small>
                    Superintendencia de Salud · Colegio Médico de Chile
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
