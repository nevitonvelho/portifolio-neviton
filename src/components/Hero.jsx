"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "preact/hooks";
import { Container, Nav } from "react-bootstrap";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Container id="sobre" className="secHero">
        <section className="contentHero">
          <div className="text">
            <div className="contentText" data-aos="fade-right">
              <h1>Bem-vindo ao meu Portfólio!</h1>
              <p>
                Sou desenvolvedor Full Stack, focado em automação com RPA. Estou sempre aprendendo e aprimorando minhas habilidades em Playwright, Java, Python e Scala.
              </p>
              <Nav.Link href="https://wa.me/46999784485">
                <button className="buttonModern" role="button">Saiba Mais</button>
              </Nav.Link>
            </div>
          </div>
          <div className="imgCapaHero" data-aos="fade-left">
            <img src="123.jpg" alt="Foto de Neviton Velho" />
          </div>
        </section>
      </Container>
    </>
  );
}
