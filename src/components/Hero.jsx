"use client";

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "preact/hooks";

import { Container, Nav } from "react-bootstrap";

export default function Hero(){
  useEffect(()=>{
    Aos.init({})
  },[])
    return(
        <>
        <Container id="sobre" class={'secHero'}>
          
          <section class={'contentHero'}>
           <div class={'text'} >
            <div class={'contentText'} data-aos="flip-up">
                    <h1>Bem-vindo ao meu Portfólio!</h1>
                    <p>Sou Neviton Velho, um desenvolvedor web apaixonado, residente no Brasil. Neste portfólio, você terá um vislumbre da minha jornada no desenvolvimento web, onde a criatividade se encontra com a funcionalidade.</p>
                    <Nav.Link href='https://wa.me/46999784485'><button class="buttonTeste" role="button">Saiba Mais</button></Nav.Link>
            </div>
           </div>
            <div class={'imgCapaHero'}>
                <img src="123.jpg" alt="Foto do Neviton Velho" />
            </div>
          </section>
        </Container>
        </>
    )
}