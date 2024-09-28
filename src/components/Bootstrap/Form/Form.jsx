import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import emailjs from 'emailjs-com';

import './Form.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('E-mail enviado com sucesso!');
                },
                (error) => {
                    console.log(error.text);
                    alert(
                        'Erro ao enviar o e-mail. Tente novamente mais tarde.'
                    );
                }
            );
    };

    return (
        <>
            <h1 className="title">Contato</h1>
            <div className="contact">
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                {/* FirstName */}
                                <FloatingLabel
                                    controlId="floatingFirstName"
                                    label="Primeiro Nome"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="first_name"
                                        placeholder="ex.: João"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                {/* LastName */}
                                <FloatingLabel
                                    controlId="floatingLastName"
                                    label="Último Nome"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="last_name"
                                        placeholder="ex.: da Silva"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FloatingLabel>
                            </Col>
                            <Row>
                                {/* Email */}
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingEmail"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FloatingLabel>
                                </Col>

                                {/* Whatsapp */}
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingNumber"
                                        label="Whatsapp"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="number"
                                            name="number"
                                            placeholder="(21)99999-9999"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            {/* TextArea */}
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingTextArea"
                                        label="TextArea"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            rows={30}
                                            type="text"
                                            name="message"
                                            placeholder="Digite sua mensagem"
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={{ height: '100px' }}
                                            required
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            {/* Send Button */}
                            <Form.Group className="mb-3">
                                <Button type="submit">Enviar e-mail</Button>
                            </Form.Group>
                        </Row>
                    </Container>
                </Form>
            </div>
        </>
    );
}

export default ContactForm;
