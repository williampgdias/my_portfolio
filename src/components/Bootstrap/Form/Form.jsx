import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
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
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formFirstName">
                <Form.Label column sm={2}>
                    Primeiro nome
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="ex: Lauro"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formLastName">
                <Form.Label column sm={2}>
                    Último nome
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="ex: Martins"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm={2}>
                    E-mail
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Digite um e-mail válido"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Col>
            </Form.Group>

            {/* TextArea */}
            <Form.Group as={Row} className="mb-3" controlId="formMessage">
                <Form.Label column sm={2}>
                    Mensagem
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        name="message"
                        placeholder="Digite sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Enviar e-mail</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default ContactForm;
