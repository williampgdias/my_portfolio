import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarWithLabel({ now, technology }) {
    return <ProgressBar now={now} label={`${technology}: ${now}%`} />;
}

export default ProgressBarWithLabel;
