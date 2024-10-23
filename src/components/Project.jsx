import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projetos(){
    return(
        <>
            <section id="projetos" className="sec2">
                <Container class='gridAll'>

                    <div class={'textProjetos'}  >
                        <h2>Meus projetos</h2>
                        <p>Se você tem uma ideia de aplicativo móvel que precisa ganhar vida ou um site que precisa de uma reformulação, estou aqui para transformar seus sonhos digitais em realidade.</p>
                    </div>
                            <Row data-aos="zoom-in" class=' justify-content-center' >
                                <Col>
                                    <Card style={{ marginBottom: '1rem'}}>
                                        <div className="imgContent"> 
                                            <Card.Img variant="top" src="Screenshot_2.png" />
                                        </div>
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
                                    <Card style={{ marginBottom: '1rem'}}>
                                        <div className="imgContent">
                                            <Card.Img variant="top" src="Screenshot_1.png" />
                                        </div>
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
                                    <Card style={{ marginBottom: '1rem'}}>
                                        <div className="imgContent">
                                            <Card.Img class={'img'} variant="top" src="Screenshot_3.png" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>Automação RPA</Card.Title>
                                            <Card.Text>
                                                RPA para extrair informações de vendas mercadolivre
                                            </Card.Text>
                                            <a href="/projetos/aize">
                                                <button class={'buttonTeste'} variant="primary">Saiba Mais</button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ marginBottom: '1rem'}}>
                                        <div className="imgContent">
                                            <Card.Img variant="top" src="Screenshot_4.png" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>NewDetox</Card.Title>
                                            <Card.Text >
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