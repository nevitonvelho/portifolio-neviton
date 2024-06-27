import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import './style.css';

export default function Admin() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        bio: '',
        photo: '',
        email: '',
        phone: '',
        socialLinks: ''
    });

    const [projects, setProjects] = useState([
        { image: '', title: '', description: '' }
    ]);

    const [skills, setSkills] = useState([
        { skill: '' }
    ]);

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handleProjectChange = (index, e) => {
        const { name, value } = e.target;
        const newProjects = [...projects];
        newProjects[index][name] = value;
        setProjects(newProjects);
    };

    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const newSkills = [...skills];
        newSkills[index][name] = value;
        setSkills(newSkills);
    };

    const addProject = () => {
        setProjects([...projects, { image: '', title: '', description: '' }]);
    };

    const addSkill = () => {
        setSkills([...skills, { skill: '' }]);
    };

    return (
        <Container>
            <h2 className="text-center">Admin Page</h2>
            <hr />

            <section className="mb-4">
                <h3>Informações Pessoas Sobre a Página</h3>
                <Form>
                    <Form.Group controlId="fullName">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control
                            type="text"
                            name="fullName"
                            value={personalInfo.fullName}
                            onChange={handlePersonalInfoChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="bio">
                        <Form.Label>Bibliografia</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="bio"
                            value={personalInfo.bio}
                            onChange={handlePersonalInfoChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="photo">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="photo"
                            value={personalInfo.photo}
                            onChange={handlePersonalInfoChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={personalInfo.email}
                            onChange={handlePersonalInfoChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={personalInfo.phone}
                            onChange={handlePersonalInfoChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="socialLinks">
                        <Form.Label>Social Links</Form.Label>
                        <Form.Control
                            type="text"
                            name="socialLinks"
                            value={personalInfo.socialLinks}
                            onChange={handlePersonalInfoChange}
                        />
                    </Form.Group>
                </Form>
            </section>

            <section className="mb-4">
                <h3>Projetos</h3>
                {projects.map((project, index) => (
                    <Card key={index} className="mb-2">
                        <Card.Body>
                            <Form.Group controlId={`projectImage${index}`}>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                    value={project.image}
                                    onChange={(e) => handleProjectChange(index, e)}
                                />
                            </Form.Group>
                            <Form.Group controlId={`projectTitle${index}`}>
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={project.title}
                                    onChange={(e) => handleProjectChange(index, e)}
                                />
                            </Form.Group>
                            <Form.Group controlId={`projectDescription${index}`}>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    name="description"
                                    value={project.description}
                                    onChange={(e) => handleProjectChange(index, e)}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                ))}
                <Button variant="primary" onClick={addProject}>
                    Adicionar Projeto
                </Button>
            </section>

            <section className="mb-4">
                <h3>Habilidades</h3>
                {skills.map((skill, index) => (
                    <Card key={index} className="mb-2">
                        <Card.Body>
                            <Form.Group controlId={`skill${index}`}>
                                <Form.Label>Habilidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="skill"
                                    value={skill.skill}
                                    onChange={(e) => handleSkillChange(index, e)}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                ))}
                <Button variant="primary" onClick={addSkill}>
                    Adcionar Habilidade
                </Button>
            </section>
        </Container>
    );
}
