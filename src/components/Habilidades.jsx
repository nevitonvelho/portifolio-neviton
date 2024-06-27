import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Habilidades(){
    return(
        <>
            <Container>
                <div class={'contentHab'} id="habilidades">

                <div className="contentTextHabi">
                    <font>Habilidades</font>
                    <h2>O que eu faço</h2>
                    <p class="text2">Não sou apenas um desenvolvedor; Sou um tecelão de sonhos digitais. Criar experiências online imersivas não é apenas um trabalho, mas minha vocação. Descubra abaixo como posso te ajudar.</p> 
                </div>

                <div class={''}>
                    <Row data-aos="zoom-in">
                        <Col>
                            <div className="cardHab"  >
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m3.183 2l1.604 18l7.202 2l7.222-2.002L20.818 2Zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004l-4.522-1.256l-.31-3.466h2.216l.157 1.76l2.46.664h.001l2.463-.665l.256-2.863H7.06L6.464 5.68h11.059Z"/></svg>
                                </div>
                                <h3>Desenvolvimento web front-end:</h3>
                                <p>Criar experiências web bonitas e funcionais é meu forte. Usando as últimas tecnologias e melhores práticas, eu projeto e construo sites que cativam e envolvem os usuários.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="cardHab">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M1 18q.225-2.675 1.638-4.925T6.4 9.5L4.55 6.3q-.15-.225-.075-.475T4.8 5.45q.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3t.45.05q.25.125.325.375t-.075.475L17.6 9.5q2.35 1.325 3.762 3.575T23 18zm6-2.75q.525 0 .888-.363T8.25 14t-.363-.888T7 12.75t-.888.363T5.75 14t.363.888t.887.362m10 0q.525 0 .888-.363T18.25 14t-.363-.888T17 12.75t-.888.363t-.362.887t.363.888t.887.362"/></svg>
                                </div>
                                <h3>Desenvolvimento de aplicativos móveis</h3>
                                <p>Sou especialista na criação de aplicativos móveis responsivos e intuitivos que funcionam perfeitamente em dispositivos iOS e Android. Do conceito à implantação, cuido de todas as etapas do processo de desenvolvimento.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="cardHab">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-.528 2.994c.175.211.35.414.528.609c.177-.195.353-.398.528-.609a24.932 24.932 0 0 1-1.056 0m-1.995-.125a20.686 20.686 0 0 1-2.285-.367a10.8 10.8 0 0 0-.17 1.015c-.19 1.583.075 2.545.478 2.777c.403.233 1.368-.019 2.645-.974c.263-.197.528-.416.794-.655a20.665 20.665 0 0 1-1.462-1.796m7.331-.367a20.69 20.69 0 0 1-2.285.367a20.665 20.665 0 0 1-1.462 1.796c.266.24.531.458.794.655c1.277.955 2.242 1.207 2.645.974c.403-.232.667-1.194.479-2.777a11.374 11.374 0 0 0-.17-1.015m1.45-.388c.577 2.639.274 4.74-1.008 5.48c-1.282.74-3.253-.048-5.25-1.867c-1.997 1.819-3.968 2.606-5.25 1.866c-1.282-.74-1.585-2.84-1.009-5.48c-2.574-.82-4.241-2.133-4.241-3.613s1.667-2.793 4.241-3.613c-.576-2.64-.273-4.74 1.009-5.48c1.282-.74 3.253.047 5.25 1.866c1.997-1.819 3.968-2.606 5.25-1.866c1.282.74 1.585 2.84 1.009 5.48C20.833 9.207 22.5 10.52 22.5 12s-1.668 2.794-4.241 3.614m-7.32-9.779c-.265-.239-.53-.458-.793-.655c-1.277-.955-2.242-1.207-2.645-.974c-.403.232-.667 1.194-.479 2.778c.04.326.096.665.17 1.015a20.677 20.677 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796m3.585 1.796a20.63 20.63 0 0 1 2.285.368c.075-.35.132-.69.17-1.015c.19-1.584-.075-2.546-.478-2.778c-.403-.233-1.368.019-2.645.974c-.263.197-.528.416-.794.655c.497.542.987 1.143 1.462 1.796m-1.995-.125c-.175-.21-.351-.414-.528-.609c-.177.195-.353.398-.528.609a24.868 24.868 0 0 1 1.056 0m-4.156 7.198a24.907 24.907 0 0 1-.528-.914c-.095.257-.183.51-.263.762c.257.055.521.106.79.152m1.932.234a22.915 22.915 0 0 0 3.392 0A22.957 22.957 0 0 0 15.393 12a22.863 22.863 0 0 0-1.696-2.938a22.896 22.896 0 0 0-3.392 0A22.91 22.91 0 0 0 8.609 12a22.926 22.926 0 0 0 1.696 2.938m5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153a25.076 25.076 0 0 1 .527.914M6.131 9.837c-.34.11-.662.23-.964.36c-1.465.628-2.166 1.338-2.166 1.803c0 .465.7 1.175 2.166 1.803c.302.13.624.25.964.36c.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163m1.45-.388c.081.25.169.504.264.76a24.929 24.929 0 0 1 .528-.913c-.27.046-.534.097-.791.153m10.29 4.714c.34-.11.662-.23.964-.36C20.3 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803c-.302-.13-.625-.25-.965-.36c-.22.7-.496 1.426-.824 2.163c.328.737.603 1.463.825 2.163m-1.45.389a19.245 19.245 0 0 0-.264-.762a25.108 25.108 0 0 1-.528.914c.27-.046.534-.097.791-.152"/></svg>
                                </div>
                                <h3>Pilha de tecnologia</h3>
                                <p>Tenho conhecimento das tecnologias de front-end mais populares do setor, incluindo HTML5, CSS3, JavaScript e estruturas como React e React Native.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="cardHab">
                                <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M14.54 2v2.486c0 1.748 0 2.622.215 3.461c.213.84.633 1.61 1.472 3.15l1.136 2.088c2.138 3.926 3.207 5.89 2.33 7.345l-.014.022C18.79 22 16.526 22 12 22s-6.79 0-7.68-1.448l-.013-.022c-.877-1.455.192-3.419 2.33-7.345l1.136-2.088c.84-1.54 1.258-2.31 1.472-3.15s.214-1.713.214-3.46V2M9 16.002L9.009 16M15 18.002l.009-.002M8 2h8"/><path d="M7.5 11.556c1-1.153 2.6-.322 4.5.762c2.5 1.426 4 .332 4.5-.703"/></g></svg>
                                </div>
                                <h3>Testes e garantia de qualidade</h3>
                                <p>Eu testo e depuro aplicativos rigorosamente para garantir um ambiente seguro e livre de bugs para os usuários. Sua tranquilidade é tão importante para mim quanto a funcionalidade do seu projeto.</p>
                            </div>
                        </Col>
                    
                    </Row>
                </div>

                </div>
            </Container>
        </>
    )
}