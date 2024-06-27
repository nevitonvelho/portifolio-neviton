import { Container, Form, Button } from 'react-bootstrap';
import './style.css';

export default function Login() {
    return (
        <Container className="login-container">
            <h2 className="text-center">Logar na conta</h2>
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Endereço de E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <button class={'buttonTeste'}  type="submit" >
                    Login
                </button>
            </Form>
        </Container>
    );
}