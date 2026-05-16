export function Footer() {
  return (
    <footer>
      <div className="container-x">
        <div className="footer-grid">
          <div className="brand-block">
            <div
              className="brand"
              style={{ color: "#FAF7F1", display: "inline-flex" }}
            >
              <span>
                <span
                  className="mark"
                  style={{ background: "#C9D49E" }}
                ></span>
                mimente<em style={{ color: "#C9D49E" }}>crece</em>
              </span>
            </div>
            <p>
              Sitio educativo de la Dra. Camila Collao Iturra. La atención
              clínica se presta a través del Centro Médico IntegraMente,
              prestador institucional inscrito en la Superintendencia de Salud.
            </p>
            <div className="crisis-callout">
              <strong>Si estás en crisis</strong>
              <p>
                Salud Responde 600 360 7777 (opción 1) · *4141 prevención del
                suicidio · Urgencia 131. Atención inmediata 24/7.
              </p>
            </div>
          </div>

          <div>
            <div className="col-title">Navegar</div>
            <ul>
              <li>
                <a href="#sobre">Sobre mí</a>
              </li>
              <li>
                <a href="#metodo">Cómo trabajamos</a>
              </li>
              <li>
                <a href="#areas">Áreas</a>
              </li>
              <li>
                <a href="#faq">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#agendar">Agendar consulta</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="col-title">Contacto</div>
            <ul>
              <li>
                <a
                  href="https://instagram.com/mimentecrece"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mimentecrece
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56968428631"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://centromedicointegramente.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centro Médico IntegraMente
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="col-title">Legal</div>
            <ul>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
              <li>
                <a href="#">Aviso de cookies</a>
              </li>
              <li>Ley 19.628 / 21.719</li>
              <li>Ley 21.541 Telemedicina</li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>
            © 2026 · mimentecrece · Dra. Camila Collao Iturra. Todos los
            derechos reservados.
          </span>
          <span>
            La información de este sitio no reemplaza una consulta médica.
          </span>
        </div>
      </div>
    </footer>
  );
}
