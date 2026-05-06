import {  } from 'react';
import './App.css';
import PlanetsList from './views/planetsList';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PlanetsList />} />
            </Routes>
        </BrowserRouter>
    );
}