// src/Rotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './Cadastro';
import Login from './Login';
import Principal from './Principal';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/principal" element={<Principal />} />
            </Routes>
        </Router>
    );
};

export default Rotas;
