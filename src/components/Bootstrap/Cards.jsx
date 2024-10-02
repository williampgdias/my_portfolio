import React, { useState } from 'react';

// Import Bootstrap.
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Import components
import MyModal from './MyModal';

const CardContainer = ({
    image,
    title,
    cardInfo,
    githubLink,
    deployedLink,
}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                    >
                        saiba mais
                    </Button>
                </Card.Body>
            </Card>

            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
                cardInfo={cardInfo}
                githubLink={githubLink}
                deployedLink={deployedLink}
            />
        </>
    );
};

export default CardContainer;
