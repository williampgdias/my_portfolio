import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import CSS
import './App.css';

// Import Components
import Header from './components/Header/Header';
import SobreMim from './pages/SobreMim/SobreMim';
import Portfolio from './pages/Portfolio/Portfolio';
import Contato from './pages/Contato/Contato';

function App() {
    return (
        <div className="container">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/sobre-mim" element={<SobreMim />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
