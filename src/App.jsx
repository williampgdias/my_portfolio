import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
