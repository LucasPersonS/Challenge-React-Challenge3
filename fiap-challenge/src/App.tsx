import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Integrantes from './pages/Integrantes';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Parceiros from './pages/Parceiros'; 
import './styles/globalStyles';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/integrantes" element={<Integrantes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/parceiros" element={<Parceiros />} /> 
            </Routes>
        </Router>
    );
}

export default App;
