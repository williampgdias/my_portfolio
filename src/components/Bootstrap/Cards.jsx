// Import the required modules.
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardContainer = ({
    image,
    title,
    cardInfo,
    githubLink,
    depoloyedLink,
}) => {
    return (
        <>
            {['Dark'].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{
                        width: '25rem',
                    }}
                >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{cardInfo}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Button
                            variant="light"
                            style={{ marginRight: '10px' }}
                            href={githubLink}
                            target="_blank"
                        >
                            GitHub
                        </Button>

                        <Button
                            variant="info"
                            href={depoloyedLink}
                            target="_blank"
                        >
                            Deployed
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default CardContainer;
