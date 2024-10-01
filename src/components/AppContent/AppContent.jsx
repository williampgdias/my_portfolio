import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS
import '../../App.css';

// Import Components
import Header from '../Header/Header';
import SobreMim from '../../pages/SobreMim/SobreMim';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Contato from '../../pages/Contato/Contato';
import Home from '../../pages/Home/Home';
import Footer from '../Footer/Footer';

const AppContent = () => {
    const location = useLocation();

    return (
        <>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mim" element={<SobreMim />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </div>
            {location.pathname !== '/' && <Footer />}
        </>
    );
};

export default AppContent;
