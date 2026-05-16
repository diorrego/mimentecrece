"use client";

import { Accordion } from "@base-ui/react/accordion";

const faqs = [
  {
    q: "¿Necesito una derivación previa para agendar?",
    a: "No. Puedes agendar directamente a través del sistema de Centro Médico IntegraMente. Si vienes con informes previos o resultados, son bienvenidos, pero no son obligatorios para la primera consulta.",
  },
  {
    q: "¿Pueden emitir licencias médicas?",
    a: "La emisión de licencias médicas en telemedicina requiere una plataforma certificada (Sello CENS). Por eso se realiza exclusivamente a través de los sistemas del Centro Médico IntegraMente, en cumplimiento de la Ley 21.541.",
  },
  {
    q: "¿Cómo es una primera sesión?",
    a: "Dura 40 minutos. La primera parte es para conocernos: cómo llegas, qué te trae, tus antecedentes. Luego construimos juntos un plan inicial, siempre revisable, siempre conversado.",
  },
  {
    q: "¿Atienden Isapres o Fonasa?",
    a: "El Centro Médico IntegraMente emite boleta médica reembolsable. La cobertura específica depende de tu Isapre o tramo Fonasa. Te recomendamos consultar antes con tu prestador previsional.",
  },
  {
    q: "¿Qué pasa si tengo una crisis fuera del horario de consulta?",
    a: "Este sitio no reemplaza una urgencia. Si estás en crisis, llama a Salud Responde (600 360 7777, opción 1), a la línea de prevención del suicidio (*4141), o acude al servicio de urgencia más cercano.",
  },
  {
    q: "¿Las consultas son siempre online?",
    a: "Sí. La atención clínica se realiza vía videoconsulta segura a través de la plataforma del Centro Médico IntegraMente. Esto facilita el acceso desde cualquier parte de Chile.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-x">
        <div className="faq-grid">
          <div className="faq-head reveal">
            <span className="eyebrow">07 · Preguntas</span>
            <h2 className="h1" style={{ marginTop: 18 }}>
              Antes de <em className="italic">empezar.</em>
            </h2>
            <p>
              Las dudas que aparecen seguido cuando alguien considera una
              primera consulta.
            </p>
            <a
              className="pre-cta"
              href="https://wa.me/56968428631?text=Hola,%20llegu%C3%A9%20desde%20mimentecrece%20y%20quisiera%20consultar%20por%20una%20hora%20con%20la%20Dra.%20Camila%20Collao"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿Otra pregunta? Escríbeme por WhatsApp →
            </a>
          </div>

          <Accordion.Root className="faq-list reveal" defaultValue={[0]} multiple>
            {faqs.map((f, i) => (
              <Accordion.Item className="faq-item" key={i} value={i}>
                <Accordion.Header style={{ margin: 0 }}>
                  <Accordion.Trigger className="faq-trigger">
                    <span>{f.q}</span>
                    <span className="plus" aria-hidden="true">
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="faq-panel">
                  <div className="faq-answer">{f.a}</div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
