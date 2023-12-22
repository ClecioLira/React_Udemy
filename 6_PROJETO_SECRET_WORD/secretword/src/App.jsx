// CSS
import './App.css'
// REACT
import { useCallback, useEffect, useState } from 'react'
// DATA
import {wordsList} from './data/words'
// COMPONENTES
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    // PEGANDO CATEGORIA ALEATORIA
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // PEGANDO PALAVRA ALEATORIA
    const word = words[category][Math.floor(Math.random() * words[category].length)]
;
    return {word, category}
  }

  // START THE GAME
  const startGame = () => {
    // FUNÇÃO PARA PICKEDWORD E PICKEDCATEGORY
    const {word, category} = pickWordAndCategory()

    // CRIANDO UM ARRAY DE LETRAS
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // FILTRAR STATES
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)
    
    setGameStage(stages[1].name)
  }

  // PROCESSA A LETRA NO INPUT
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // RECOMEÇAR O JOGO
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </>
  )
}

export default App
