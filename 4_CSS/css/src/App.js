import { useState } from 'react';
import './App.css';

import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 55
  let [name, setName] = useState("Clécio")
  const redTitle = true
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <h2 style={
        n < 10 ? ({
          color: "red"
        }) : ({
          color: "green"
        })
      }>CSS dinamico</h2>

      <h2 style={
        name === "Clécio" ? ({
          color: "red"
        }) : ({
          color: "green"
        })
      }>{name}</h2>
      <button onClick={() => setName("Matheus")}>Clique</button>

      <h1>CLASSE DINAMICA</h1>
      <p className={
        redTitle ? "red-title" : "title"
      }>esse titulo tera classe dinamica</p>

      <h1>CSS MODULES</h1>
      <Title />
    </div>
  );
}

export default App;
