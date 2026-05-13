import './App.css';
import PlanetsCreate from './views/planetsCreate';
import PlanetsList from './views/planetsList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/planets" replace />} />
                <Route path="/planets" element={<PlanetsList />} />
                <Route path="/planets/create" element={<PlanetsCreate />} />
            </Routes >
        </BrowserRouter >
    );
}