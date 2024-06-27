import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projetos(){
    return(
        <>
            <section className="sec2">
                <Container>

                    <div class={'textProjetos'}  >
                        <h2>Meus projetos</h2>
                        <p>Se você tem uma ideia de aplicativo móvel que precisa ganhar vida ou um site que precisa de uma reformulação, estou aqui para transformar seus sonhos digitais em realidade.</p>
                    </div>
                            <Row data-aos="zoom-in">
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="Screenshot_2.png" />
                                        <Card.Body>
                                            <Card.Title>Grilazer</Card.Title>
                                            <Card.Text>
                                                Serviço de manutenção em site Worpress
                                            </Card.Text>
                                            <a href="/projetos/grilazer">
                                                <button class={'buttonTeste'} variant="primary">Saiba Mais</button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="Screenshot_1.png" />
                                        <Card.Body>
                                            <Card.Title>Criptocom</Card.Title>
                                            <Card.Text>
                                            Projeto de feito para estudo da tecnologia next.js
                                            </Card.Text>
                                            <a href="/projetos/criptocom">
                                                <button class={'buttonTeste'} variant="primary">Saiba Mais</button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="Screenshot_3.png" />
                                        <Card.Body>
                                            <Card.Title>Aize</Card.Title>
                                            <Card.Text>
                                                Desenvolvimento de um blog feito com Wordpress
                                            </Card.Text>
                                            <a href="/projetos/aize">
                                                <button class={'buttonTeste'} variant="primary">Saiba Mais</button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="Screenshot_4.png" />
                                        <Card.Body>
                                            <Card.Title>NewDetox</Card.Title>
                                            <Card.Text>
                                            Projeto de feito para estudo da tecnologia next.js
                                            </Card.Text>
                                            <a href="/projetos/newdetox">
                                                <button class={'buttonTeste'} variant="primary">Saiba Mais</button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                              
                            </Row>
                </Container>
            </section>
        </>
    )
}