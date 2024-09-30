import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './Rotas'; // Certifique-se de que o caminho esteja correto
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bem-vindo ao Meu App</h1>
        <Rotas />
      </div>
    </Router>
  );
}

export default App;
