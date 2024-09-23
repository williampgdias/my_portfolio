import React from 'react';
import { Link } from 'react-router-dom';

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
            </nav>
        </header>
    );
};

export default Header;
