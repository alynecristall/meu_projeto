// src/Cadastro.js
import React, { useState } from 'react';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const cadastrarUsuario = async (e) => {
        e.preventDefault();
        try {
            const usuarioCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const uid = usuarioCredential.user.uid;

            // Armazenar dados do usuário no Firestore
            await setDoc(doc(db, "usuarios", uid), {
                nome,
                sobrenome,
                dataNascimento,
                email
            });

            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar: ' + error.message);
        }
    };

    return (
        <form onSubmit={cadastrarUsuario}>
            <h1>Cadastro</h1>
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
            <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Cadastro;

