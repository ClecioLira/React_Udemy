import './App.css';

import MyComponent from './components/MyComponent';
import Title from './components/Title';
import {useState} from 'react'

function App() {
  const n = 15
  const [name] = useState('Clécio')
  const redTitle = 1

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>

      {/* CSS DE COMPONENTE */}
      <MyComponent/>
      <p>Esse paragrafo é do App.js</p>

      {/* CSS INLINE */}
      <p style={{color: 'blue', backgroundColor: 'green'}}>Esse paragrafo é inline</p>

      {/* CSS INLINE DINAMICO */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink'}}>
        CSS DINAMICO
      </h2>
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'pink'}}>
        CSS DINAMICO
      </h2>
      <h2 style={name === 'Clécio' ? {color: 'green', backgroundColor: '#000'} : null}>TESTE NOME</h2>

      {/* CLASSES DINAMICAS */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>

      {/* CSS MODULES */}
      <Title/>
    </div>
  );
}

export default App;
