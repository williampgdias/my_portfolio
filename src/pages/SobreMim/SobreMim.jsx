import React from 'react';

// Import Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import CSS
import './SobreMim.css';

// Import Images
import myPicture from '../../assets/me.png';
import elementAbsolute from '../../assets/element2.png';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faHtml5,
    faCss3,
    faJs,
    faGitAlt,
    faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const SobreMim = () => {
    return (
        <>
            <div className="aboutMe">
                <h1 className="title">Sobre Mim</h1>
                <div className="flexContent">
                    <div className="aboutMeText">
                        <p>
                            Sou desenvolvedor Frontend em constante aprendizado,
                            apaixonado por React.js e pela criação de interfaces
                            web. Vindo de uma experiência como Chef, aprendi a
                            resolver problemas rápidos, trabalhar em equipe e a
                            prestar atenção em cada detalhe – tudo isso agora
                            aplico no mundo do código.
                        </p>
                        <p>
                            Estou sempre mergulhando em HTML, CSS, JavaScript e
                            React.js, e adoro explorar novas ferramentas para
                            criar interfaces práticas, bonitas e funcionais. Meu
                            foco é sempre trazer soluções rápidas e criativas,
                            como na cozinha, só que agora no desenvolvimento
                            web!
                        </p>
                    </div>
                    <img className="mySelf" src={myPicture} alt="Logo" />
                </div>
                <img
                    src={elementAbsolute}
                    alt="Element"
                    className="elementAbsolute"
                />
            </div>

            <div className="studyContainer">
                <h2 className="title">Habilidades</h2>

                {/* Início do container das habilidades */}
                <div className="techContainer">
                    {/* HTML */}
                    <div className="iconsContainer">
                        <FontAwesomeIcon className="icon" icon={faHtml5} />
                        <p className="techText">HTML5</p>
                    </div>

                    {/* CSS */}
                    <div className="iconsContainer">
                        <FontAwesomeIcon className="icon" icon={faCss3} />
                        <p className="techText">CSS3</p>
                    </div>

                    {/* JavaScript */}
                    <div className="iconsContainer">
                        <FontAwesomeIcon className="icon" icon={faJs} />
                        <p className="techText">JavaScript</p>
                    </div>

                    {/* React */}
                    <div className="iconsContainer">
                        <FontAwesomeIcon className="icon" icon={faReact} />
                        <p className="techText">React.js</p>
                    </div>

                    {/* Git */}
                    <div className="iconsContainer">
                        <FontAwesomeIcon className="icon" icon={faGitAlt} />
                        <p className="techText">Git</p>
                    </div>

                    {/* Bootstrap */}
                    <div className="iconsContainer">
                        <FontAwesomeIcon className="icon" icon={faBootstrap} />
                        <p className="techText">Bootstrap</p>
                    </div>
                </div>
                {/* Fim do container das habilidades */}
            </div>
        </>
    );
};

export default SobreMim;
