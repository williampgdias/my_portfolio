// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AppContent from './components/AppContent/AppContent';

// import Home from './pages/Home/Home';

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/app" component={AppContent} />
//                 {/* <AppContent /> */}
//             </Switch>
//         </Router>
//     );
// };

// const Home = () => {
//     return (
//         <>
//             <h1>Home</h1>
//         </>
//     );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';

const App = () => {
    return (
        <Router basename="/my_portfolio">
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/app" element={<AppContent />} />
            </Routes>
        </Router>
    );
};

const Home = () => {
    return (
        <div>
            <AppContent />
        </div>
    );
};

export default App;
