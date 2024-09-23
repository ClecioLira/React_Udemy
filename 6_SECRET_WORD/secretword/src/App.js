// CSS
import './App.css';

// REACT
import { useCallback, useEffect, useState } from 'react';

// DATA
import {wordsList} from './data/words'

// COMPONENTS
import StarScreen from './components/StarScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [categoria, mudaCategoria] = useState("")
  const [palavra, mudaPalavra] = useState("")
  const [letra, mudaLetra] = useState([])

  const [letraAdivinhada, mudaLetraAdivinhada] = useState([])
  const [letraErrada, mudaLetraErrada] = useState([])
  const [chances, mudaChances] = useState(5)
  const [pontuacao, mudaPontuacao] = useState(0)

  const pegaPalavraCategoria = () => {
    const categorias = Object.keys(words)
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)]

    const palavra = words[categoria][Math.floor(Math.random() * words[categoria].length)]

    return {palavra, categoria}
  }
  
  const startGame = () => {
    const {palavra, categoria} = pegaPalavraCategoria()

    let palavraLetras = palavra.split("")
    palavraLetras = palavraLetras.map((letra) => letra.toLowerCase())

    mudaPalavra(palavra)
    mudaCategoria(categoria)
    mudaLetra(palavraLetras)

    setGameStage(stages[1].name)
  }

  const verifyLetter = (letter) => {
    const normalLetra = letter.toLowerCase()

    if(letraAdivinhada.includes(normalLetra) || letraErrada.includes(normalLetra)) return

    if(letra.includes(normalLetra)) {
      mudaLetraAdivinhada(atualLetraAdivinha => [
        ...atualLetraAdivinha,
        normalLetra
      ])
    } else {
      mudaLetraErrada(atualLetraErrada => [
        ...atualLetraErrada,
        normalLetra
      ])
    }

    console.log(letraAdivinhada)
    console.log(letraErrada)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {gameStage === 'start' && <StarScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game 
        verifyLetter={verifyLetter}
        palavra={palavra}
        categoria={categoria}
        letra={letra}
        letraAdivinhada={letraAdivinhada}
        letraErrada={letraErrada}
        chances={chances}
        pontuacao={pontuacao}
      />}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
