import React from 'react';

// Import Modal
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MyModal = ({ title, cardInfo, githubLink, deployedLink, ...props }) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    style={{ color: 'black' }}
                    id="contained-modal-title-vcenter"
                >
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: 'black' }}>
                <p>{cardInfo}</p>
                <Button className="btnModal" href={githubLink} target="_blank">
                    GitHub
                </Button>
                <Button
                    className="btnModal"
                    href={deployedLink}
                    target="_blank"
                >
                    Deployed
                </Button>
            </Modal.Body>
            <Modal.Footer style={{ color: 'black' }}>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyModal;
