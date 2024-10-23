import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Habilidades() {
    return (
        <>
            <Container>
                <div className="contentHab" id="habilidades">
                    <div className="contentTextHabi">
                        <h1>Minhas Habilidades</h1>
                        <p className="text2">
                            Transformo ideias em soluções digitais, com foco em eficiência e inovação. Aqui estão algumas das minhas principais habilidades.
                        </p>
                    </div>

                    <div>
                        <Row data-aos="zoom-in" className="skillsRow">
                            <Col md={6} lg={4}>
                                <div className="cardHab">
                                    <div className="icon">
                                        <i class="ri-reactjs-line"></i>
                                    </div>
                                    <h3>Desenvolvimento Front-end</h3>
                                    <p>Crio interfaces web responsivas com HTML, CSS, JavaScript e React, focando na experiência do usuário.</p>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="cardHab">
                                    <div className="icon">
                                        <i class="ri-database-2-line"></i>
                                    </div>
                                    <h3>Desenvolvimento Back-end</h3>
                                    <p>Desenvolvo APIs escaláveis utilizando Node.js, Python e Java, conectando sistemas a bancos de dados robustos.</p>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="cardHab">
                                    <div className="icon">
                                        <i class="ri-robot-2-line"></i>
                                    </div>
                                    <h3>Automação de Processos</h3>
                                    <p>Crio soluções de automação de processos utilizando RPA, otimizando fluxos de trabalho e economizando tempo.</p>
                                </div>
                            </Col>
                          
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
}
