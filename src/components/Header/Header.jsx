import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Import CSS
import './Header.css';

// import logo
import img from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div>
                <img className="logo" src={img} alt="Logo" />
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/sobre-mim">Sobre Mim</Link>
                <Link to="/portfolio">Portfólio</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/idioma" className="language">
                    Idioma
                    <FontAwesomeIcon
                        className="arrowDown"
                        icon={faChevronDown}
                    />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
