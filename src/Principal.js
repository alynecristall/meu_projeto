// src/Principal.js
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

const Principal = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const obterDadosUsuario = async () => {
            if (auth.currentUser) {
                const uid = auth.currentUser.uid;
                const docRef = doc(db, "usuarios", uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUsuario(docSnap.data());
                } else {
                    console.log("Nenhum documento encontrado!");
                }
            }
        };

        obterDadosUsuario();
    }, []);

    return (
        <div>
            <h1>Página Principal</h1>
            {usuario ? (
                <div>
                    <p>Nome: {usuario.nome}</p>
                    <p>Sobrenome: {usuario.sobrenome}</p>
                    <p>Data de Nascimento: {usuario.dataNascimento}</p>
                </div>
            ) : (
                <p>Carregando dados do usuário...</p>
            )}
        </div>
    );
};

export default Principal;
