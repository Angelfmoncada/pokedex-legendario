import { Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';


function App() {
  return (
    <>
      <header>
        <h1>⚡ POKÉMON UNIVERSE ⚡</h1>
        <nav>
          <ul>
            <li><Link to="/">🎠 Inicio</Link></li>
            <li><Link to="/pokelist">📱 Pokédex</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={(<Home />)} />
          <Route path="/pokelist" element={(<Pokedex />)} />
          <Route path="/pokelist/:pokemonId" element={(<Pokemon/>)} />
        </Routes>
      </main>
      <footer>
        <div>
          ⚡ Pokédex Legendario 2025 ⚡
          <br />
          <small>Gotta catch 'em all! 🎯</small>
        </div>
      </footer>
    </>
  )
}

export default App
