import React from 'react';
import logo from './adidas.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Bem vindos todos voces na pagina do react.
        </p>
        <button className="boton">Write me !</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende Angular
        </a>
      </header>
    </div>
  );
}

export default App;
