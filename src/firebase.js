// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCIu35y5wJrtqnDXbVyzhnisVp2Ek2rHpg",
    authDomain: "meu-projeto-d36b6.firebaseapp.com",
    projectId: "meu-projeto-d36b6",
    storageBucket: "meu-projeto-d36b6.appspot.com",
    messagingSenderId: "723544259733",
    appId: "1:723544259733:web:8a23235118f13a805def9c"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar a autenticação e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar a autenticação e o Firestore para uso em outros arquivos
export { auth, db };

