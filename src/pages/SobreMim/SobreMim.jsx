import React from 'react';

// Import Images
import myPicture from '../../assets/me.png';
import elementAbsolute from '../../assets/element2.png';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faHtml5,
    faCss3,
    faJs,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

// Import Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import CSS
import './SobreMim.css';

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
                <Container>
                    <Row>
                        {/* Col 01 */}
                        <Col>
                            {/* HTML */}
                            <div className="iconsContainer">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faHtml5}
                                />
                                <p className="techText">HTML5</p>
                            </div>
                        </Col>
                        {/* Col 02 */}
                        <Col>
                            <div className="iconsContainer">
                                {/* CSS */}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faCss3}
                                />
                                <p className="techText">CSS3</p>
                            </div>
                        </Col>
                        {/* Col 03 */}

                        <Col>
                            <div className="iconsContainer">
                                {/* JavaScript */}
                                <FontAwesomeIcon className="icon" icon={faJs} />
                                <p className="techText">JavaScript</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* React */}
                            <div className="iconsContainer">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faReact}
                                />
                                <p className="techText">React.js</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="iconsContainer">
                                {/* Git */}
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faGitAlt}
                                />
                                <p className="techText">Git</p>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                    {/* <Row>
                        <Col md={6}>
                            <p className="techText">
                                Tecnologias que já trabalho:
                            </p>
                            
                        </Col>
                        <Col md={6}>
                            <p className="techText">
                                Tecnologias que estudo atualmente:
                            </p>
                            <div className="iconsContainer"></div>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row> */}
                </Container>
            </div>
        </>
    );
};

export default SobreMim;
