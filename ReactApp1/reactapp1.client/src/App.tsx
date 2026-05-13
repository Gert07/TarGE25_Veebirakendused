import './App.css';
import PlanetsList from './views/planetsList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/planets" replace />} />
                <Route path="/planets" element={<PlanetsList />} />"
            </Routes >
        </BrowserRouter >
    );
}