import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import CSS
import './Header.css';

// import images
import brasil from '../../assets/brasil.png';
import inglaterra from '../../assets/inglaterra.png';
import img from '../../assets/logo.png';

const Header = () => {
    const [language, setLanguage] = useState(brasil);

    const changeLanguage = () => {
        setLanguage(language === brasil ? inglaterra : brasil);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="header">
                <Container>
                    <Navbar.Brand>
                        <img className="logo" src={img} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav justify-content-end">
                            <Link to="/home">Home</Link>
                            <Link to="/sobre-mim">Sobre Mim</Link>
                            <Link to="/portfolio">Portfólio</Link>
                            <Link to="/contato">Contato</Link>
                            <div>
                                <img
                                    className="logoLanguage"
                                    src={language}
                                    alt="Bandeira Brasil"
                                    onClick={changeLanguage}
                                />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
