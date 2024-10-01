import React from 'react';

// Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import './Home.css';

// images
import mySelf from '../../assets/mySelf.png';

const Home = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="home">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h1 className="title">
                            Eu sou{' '}
                            <span className="name-color">William Dias</span>
                        </h1>
                    </Col>
                    <Col xs={12} md={4}>
                        <div
                            className="image-container"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="myPicture"
                                src={mySelf}
                                alt="Picture of William Dias"
                            />
                            <div
                                className={`circle ${
                                    isHovered ? 'hovered' : ''
                                }`}
                            ></div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <p className="subtitle">Desenvolvedor FrontEnd</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
